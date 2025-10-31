import { NextRequest, NextResponse } from 'next/server';

import { env } from '@/lib/config/env';

export const runtime = 'nodejs';

const shouldLogProxyTraffic = env.opencellProxyLogs;
const textDecoder = new TextDecoder();

const hopByHopHeaders = new Set([
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailers',
  'transfer-encoding',
  'upgrade',
]);

const stripHopByHopHeaders = (headers: Headers) => {
  hopByHopHeaders.forEach((header) => {
    headers.delete(header);
  });
  return headers;
};

const ensureTrailingSlash = (value: string) => (value.endsWith('/') ? value : `${value}/`);

const readEnv = (key: string) => {
  const value = process.env[key] ?? process.env[key.toLowerCase()];
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const parseNoProxy = (value: string | undefined): string[] => {
  if (!value) {
    return [];
  }

  return value
    .split(',')
    .map((segment) => segment.trim())
    .filter((segment) => segment.length > 0);
};

const removeIpv6Brackets = (hostname: string) => {
  if (hostname.startsWith('[') && hostname.endsWith(']')) {
    return hostname.slice(1, -1);
  }
  return hostname;
};

const normalizeHostname = (hostname: string) => removeIpv6Brackets(hostname).toLowerCase();

const splitHostAndPort = (value: string): { hostname: string; port?: string } => {
  if (!value) {
    return { hostname: value };
  }

  if (value.startsWith('[')) {
    const closingBracketIndex = value.indexOf(']');
    if (closingBracketIndex !== -1) {
      const hostname = value.slice(0, closingBracketIndex + 1);
      const portSegment = value.slice(closingBracketIndex + 1);
      if (portSegment.startsWith(':')) {
        return { hostname, port: portSegment.slice(1) };
      }
      return { hostname };
    }
  }

  const lastColonIndex = value.lastIndexOf(':');
  if (lastColonIndex > -1 && value.indexOf(':') === lastColonIndex) {
    const hostname = value.slice(0, lastColonIndex);
    const port = value.slice(lastColonIndex + 1);
    return { hostname, port };
  }

  return { hostname: value };
};

const createNoProxyMatcher = (entries: string[]) => {
  if (entries.length === 0) {
    return () => false;
  }

  const matchers = entries.map((entry) => {
    const trimmed = entry.trim();
    if (trimmed === '*') {
      return () => true;
    }

    const { hostname: rawHostname, port } = splitHostAndPort(trimmed);
    const hostname = normalizeHostname(rawHostname);
    const isDomainPattern = hostname.startsWith('.');
    const normalizedHostname = isDomainPattern ? hostname.slice(1) : hostname;

    return (targetHostname: string, targetPort: string) => {
      if (port && port !== targetPort) {
        return false;
      }

      if (hostname === '*') {
        return true;
      }

      if (isDomainPattern) {
        return (
          targetHostname === normalizedHostname ||
          targetHostname.endsWith(`.${normalizedHostname}`)
        );
      }

      return (
        targetHostname === normalizedHostname ||
        targetHostname.endsWith(`.${normalizedHostname}`)
      );
    };
  });

  return (hostname: string, port: string) => {
    return matchers.some((matcher) => matcher(hostname, port));
  };
};

const defaultPorts: Record<string, string> = {
  'http:': '80',
  'https:': '443',
};

const noProxyMatcher = createNoProxyMatcher(
  parseNoProxy(readEnv('NO_PROXY')),
);

const selectProxyUrl = (url: URL): string | undefined => {
  const hostname = normalizeHostname(url.hostname);
  const port = url.port || defaultPorts[url.protocol] || '';

  if (noProxyMatcher(hostname, port)) {
    return undefined;
  }

  if (url.protocol === 'http:') {
    return readEnv('HTTP_PROXY');
  }

  if (url.protocol === 'https:') {
    return readEnv('HTTPS_PROXY') ?? readEnv('HTTP_PROXY');
  }

  return undefined;
};

type Dispatcher = unknown;

type UndiciModule = {
  Agent: new (options?: Record<string, unknown>) => Dispatcher;
  ProxyAgent: new (options: { uri: string }) => Dispatcher;
};

type UndiciLoadError = Error & { code?: string };

let undiciModulePromise: Promise<UndiciModule | undefined> | undefined;

const loadUndiciModule = () => {
  if (!undiciModulePromise) {
    undiciModulePromise = import('node:undici')
      .then((module) => module as unknown as UndiciModule)
      .catch((error: unknown) => {
        const typedError = error as UndiciLoadError;
        if (typedError?.code === 'ERR_UNKNOWN_BUILTIN_MODULE') {
          console.warn(
            'Le module intégré "node:undici" est indisponible dans cet environnement. Le proxy OpenCell fonctionnera sans configuration avancée des agents.',
          );
          return undefined;
        }
        throw error;
      });
  }
  return undiciModulePromise;
};

let defaultAgent: Dispatcher | undefined;
const proxyAgentCache = new Map<string, Dispatcher>();

const createAgent = (undici: UndiciModule): Dispatcher =>
  new undici.Agent({
    keepAliveTimeout: 10_000,
    keepAliveMaxTimeout: 60_000,
    ...(env.apiRequestTimeoutMs > 0
      ? {
          bodyTimeout: env.apiRequestTimeoutMs,
          headersTimeout: env.apiRequestTimeoutMs,
        }
      : {}),
  });

const getDefaultAgent = (undici: UndiciModule): Dispatcher => {
  if (!defaultAgent) {
    defaultAgent = createAgent(undici);
  }
  return defaultAgent;
};

const getProxyAgent = (undici: UndiciModule, proxyUrl: string): Dispatcher => {
  const existing = proxyAgentCache.get(proxyUrl);
  if (existing) {
    return existing;
  }

  const agent = new undici.ProxyAgent({ uri: proxyUrl });
  proxyAgentCache.set(proxyUrl, agent);
  return agent;
};

const selectDispatcher = async (url: URL): Promise<Dispatcher | undefined> => {
  const proxyUrl = selectProxyUrl(url);
  const undici = await loadUndiciModule();

  if (!undici) {
    if (proxyUrl) {
      console.warn(
        `Impossible de configurer le proxy HTTP(S) pour ${url.toString()} car "node:undici" est indisponible.`,
      );
    }
    return undefined;
  }

  if (proxyUrl) {
    return getProxyAgent(undici, proxyUrl);
  }

  return getDefaultAgent(undici);
};

const buildTargetUrl = (request: NextRequest, path: string[]): URL => {
  const baseUrl = new URL(ensureTrailingSlash(env.apiBaseUrl));
  const relativePath = path.join('/');
  const basePathname = baseUrl.pathname.replace(/\/$/, '');
  const normalizedPath =
    relativePath.startsWith('opencell/') || basePathname.endsWith('/opencell')
      ? relativePath
      : `opencell/${relativePath}`;
  const targetUrl = new URL(normalizedPath, baseUrl);
  if (request.nextUrl.search) {
    targetUrl.search = request.nextUrl.search;
  }
  return targetUrl;
};

let proxyRequestCounter = 0;

const sanitizeBodyPreview = (body: string, maxLength = 2_000) => {
  if (body.length <= maxLength) {
    return body;
  }
  return `${body.slice(0, maxLength)}… (truncated ${body.length - maxLength} chars)`;
};

const MAX_CURL_BODY_LENGTH = 10_000;

const escapeShellArg = (value: string) => `'${value.replace(/'/g, `'"'"'`)}'`;

const redactHeaderValue = (name: string, value: string) => {
  const lowerCaseName = name.toLowerCase();
  if (lowerCaseName === 'authorization') {
    return 'Bearer <redacted>';
  }
  if (lowerCaseName === 'cookie') {
    return '<redacted>';
  }
  return value;
};

const toHeaderCase = (value: string) =>
  value
    .split('-')
    .filter((segment) => segment.length > 0)
    .map((segment) => segment[0].toUpperCase() + segment.slice(1).toLowerCase())
    .join('-');

const buildSanitizedHeaderEntries = (headers: Headers): Array<[string, string]> =>
  Array.from(headers.entries())
    .map<[string, string]>(([name, value]) => [toHeaderCase(name), redactHeaderValue(name, value)])
    .sort(([a], [b]) => a.localeCompare(b));

const buildCurlCommand = (
  method: string,
  url: URL,
  headers: Array<[string, string]>,
  bodyText: string | undefined,
): { command: string; truncatedBody?: number } => {
  const commandParts: string[] = ['curl'];
  if (method !== 'GET') {
    commandParts.push('-X', escapeShellArg(method));
  }

  headers.forEach(([name, value]) => {
    commandParts.push('-H', escapeShellArg(`${name}: ${redactHeaderValue(name, value)}`));
  });

  let truncatedBody: number | undefined;
  if (bodyText && bodyText.length > 0) {
    let bodyForCommand = bodyText;
    if (bodyText.length > MAX_CURL_BODY_LENGTH) {
      truncatedBody = bodyText.length - MAX_CURL_BODY_LENGTH;
      bodyForCommand = bodyText.slice(0, MAX_CURL_BODY_LENGTH);
    }
    commandParts.push('--data-raw', escapeShellArg(bodyForCommand));
  }

  commandParts.push(escapeShellArg(url.toString()));

  return {
    command: commandParts.join(' '),
    truncatedBody,
  };
};

type ParsedBodyForLog =
  | { kind: 'json'; value: unknown; preview?: string }
  | { kind: 'text'; preview: string };

const parseBodyForLogging = (
  bodyText: string | undefined,
  contentType?: string | null,
): ParsedBodyForLog | undefined => {
  if (!bodyText) {
    return undefined;
  }

  const preview = sanitizeBodyPreview(bodyText);

  if (contentType?.includes('application/json')) {
    try {
      const parsed = JSON.parse(bodyText);
      return preview !== bodyText
        ? { kind: 'json', value: parsed, preview }
        : { kind: 'json', value: parsed };
    } catch {
      return { kind: 'text', preview };
    }
  }

  return { kind: 'text', preview };
};

const buildLogDetails = (
  parsed: ParsedBodyForLog | undefined,
): Record<string, unknown> | undefined => {
  if (!parsed) {
    return undefined;
  }

  if (parsed.kind === 'json') {
    return {
      payloadType: 'json',
      payload: parsed.value,
      ...(parsed.preview ? { payloadPreview: parsed.preview } : {}),
    };
  }

  return {
    payloadType: 'text',
    payload: parsed.preview,
  };
};

const forwardRequest = async (request: NextRequest, path: string[]) => {
  const requestId = shouldLogProxyTraffic ? ++proxyRequestCounter : undefined;
  const targetUrl = buildTargetUrl(request, path);
  const headers = stripHopByHopHeaders(new Headers(request.headers));
  headers.delete('host');
  headers.set('accept', headers.get('accept') ?? 'application/json');

  const isBodylessMethod = request.method === 'GET' || request.method === 'HEAD';
  const body = isBodylessMethod ? undefined : await request.arrayBuffer();
  const requestBodyText =
    body === undefined ? undefined : textDecoder.decode(body);
  const sanitizedHeaderEntries = buildSanitizedHeaderEntries(headers);
  const sanitizedHeaders = sanitizedHeaderEntries.reduce<
    Record<string, string>
  >((acc, [name, value]) => {
    acc[name] = value;
    return acc;
  }, {});
  const requestLogDetails = buildLogDetails(
    parseBodyForLogging(requestBodyText, headers.get('content-type')),
  );

  if (shouldLogProxyTraffic && requestId !== undefined) {
    const message = `📡 [OpenCell Proxy #${requestId}] → ${request.method} ${targetUrl.toString()}`;

    console.warn(message, {
      headers: sanitizedHeaders,
      ...(requestLogDetails ?? {}),
    });

    const { command: curlCommand, truncatedBody } = buildCurlCommand(
      request.method,
      targetUrl,
      sanitizedHeaderEntries,
      requestBodyText,
    );
    console.warn(`📡 [OpenCell Proxy #${requestId}] ↳ ${curlCommand}`);
    if (truncatedBody) {
      console.warn(
        `📡 [OpenCell Proxy #${requestId}] ↳ Corps tronqué de ${truncatedBody} caractères pour les logs`,
      );
    }
  }

  const timeoutSignal =
    env.apiRequestTimeoutMs > 0 ? AbortSignal.timeout(env.apiRequestTimeoutMs) : undefined;

  const dispatcher = await selectDispatcher(targetUrl);

  const requestInit: RequestInit & { dispatcher?: Dispatcher } = {
    method: request.method,
    headers,
    body,
  };

  if (timeoutSignal) {
    requestInit.signal = timeoutSignal;
  }

  if (dispatcher) {
    requestInit.dispatcher = dispatcher;
  }

  const response = await fetch(targetUrl, requestInit);

  if (shouldLogProxyTraffic && requestId !== undefined) {
    const responseClone = response.clone();
    let responseText: string | undefined;
    try {
      responseText = await responseClone.text();
    } catch (error) {
      console.warn(`📡 [OpenCell Proxy #${requestId}] Impossible de lire la réponse`, error);
    }

    const responseLogDetails = buildLogDetails(
      parseBodyForLogging(responseText, response.headers.get('content-type')),
    );
    const message = `📡 [OpenCell Proxy #${requestId}] ← ${request.method} ${response.status} ${targetUrl.toString()}`;

    if (responseLogDetails) {
      console.warn(message, responseLogDetails);
    } else {
      console.warn(message);
    }
  }

  const responseHeaders = stripHopByHopHeaders(new Headers(response.headers));
  responseHeaders.delete('content-encoding');
  responseHeaders.delete('content-length');

  return new NextResponse(response.body, {
    status: response.status,
    headers: responseHeaders,
  });
};

const hasErrorCode = (value: unknown): value is { code?: unknown } => {
  return typeof value === 'object' && value !== null && 'code' in value;
};

const readErrorCode = (value: unknown): string | undefined => {
  if (!value) {
    return undefined;
  }

  if (hasErrorCode(value)) {
    const { code } = value;
    return typeof code === 'string' ? code : undefined;
  }

  return undefined;
};

const isTimeoutError = (error: unknown): boolean => {
  if (error instanceof DOMException) {
    return error.name === 'TimeoutError' || error.name === 'AbortError';
  }

  if (error instanceof Error) {
    if (readErrorCode(error) === 'UND_ERR_CONNECT_TIMEOUT') {
      return true;
    }

    if (readErrorCode(error.cause) === 'UND_ERR_CONNECT_TIMEOUT') {
      return true;
    }
  }

  return false;
};

const createProxyErrorResponse = (error: unknown) => {
  if (isTimeoutError(error)) {
    return {
      status: 504,
      body: {
        error: 'proxy_timeout',
        message: "Délai d'attente dépassé lors de l'appel de l'API OpenCell.",
      },
    } as const;
  }

  return {
    status: 502,
    body: {
      error: 'proxy_error',
      message: "Impossible d'atteindre l'API OpenCell.",
    },
  } as const;
};

const handle = async (request: NextRequest, path: string[]) => {
  try {
    return await forwardRequest(request, path);
  } catch (error) {
    console.error('Failed to proxy request to OpenCell API', error);
    const proxyError = createProxyErrorResponse(error);
    return NextResponse.json(proxyError.body, { status: proxyError.status });
  }
};

type RouteParams =
  | { opencellPath?: string[] }
  | Promise<{ opencellPath?: string[] }>;

const resolvePathSegments = async (params: RouteParams): Promise<string[]> => {
  const resolvedParams = await params;
  return resolvedParams?.opencellPath ?? [];
};

export async function GET(
  request: NextRequest,
  context: { params: RouteParams },
) {
  return handle(request, await resolvePathSegments(context.params));
}

export async function POST(
  request: NextRequest,
  context: { params: RouteParams },
) {
  return handle(request, await resolvePathSegments(context.params));
}

export async function PUT(
  request: NextRequest,
  context: { params: RouteParams },
) {
  return handle(request, await resolvePathSegments(context.params));
}

export async function PATCH(
  request: NextRequest,
  context: { params: RouteParams },
) {
  return handle(request, await resolvePathSegments(context.params));
}

export async function DELETE(
  request: NextRequest,
  context: { params: RouteParams },
) {
  return handle(request, await resolvePathSegments(context.params));
}

export async function OPTIONS(
  request: NextRequest,
  context: { params: RouteParams },
) {
  return handle(request, await resolvePathSegments(context.params));
}
