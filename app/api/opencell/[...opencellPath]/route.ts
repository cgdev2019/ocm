import { NextRequest, NextResponse } from 'next/server';

import { env } from '@/lib/config/env';

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

const buildSanitizedHeaderEntries = (headers: Headers): Array<[string, string]> =>
  Array.from(headers.entries())
    .map<[string, string]>(([name, value]) => [name, redactHeaderValue(name, value)])
    .sort(([a], [b]) => a.localeCompare(b));

const buildCurlCommand = (
  method: string,
  url: URL,
  headers: Headers,
  bodyText: string | undefined,
): { command: string; truncatedBody?: number } => {
  const commandParts: string[] = ['curl'];
  if (method !== 'GET') {
    commandParts.push('-X', escapeShellArg(method));
  }

  const headerEntries = Array.from(headers.entries()).sort(([a], [b]) =>
    a.localeCompare(b),
  );
  headerEntries.forEach(([name, value]) => {
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
  const sanitizedHeaders = buildSanitizedHeaderEntries(headers).reduce<
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
      headers,
      requestBodyText,
    );
    console.warn(`📡 [OpenCell Proxy #${requestId}] ↳ ${curlCommand}`);
    if (truncatedBody) {
      console.warn(
        `📡 [OpenCell Proxy #${requestId}] ↳ Corps tronqué de ${truncatedBody} caractères pour les logs`,
      );
    }
  }

  const response = await fetch(targetUrl, {
    method: request.method,
    headers,
    body,
  });

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

const handle = async (request: NextRequest, path: string[]) => {
  try {
    return await forwardRequest(request, path);
  } catch (error) {
    console.error('Failed to proxy request to OpenCell API', error);
    return NextResponse.json(
      {
        error: 'proxy_error',
        message: "Impossible d'atteindre l'API OpenCell.",
      },
      { status: 502 },
    );
  }
};

export const runtime = 'nodejs';

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
