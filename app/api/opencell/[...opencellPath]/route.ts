import { NextRequest, NextResponse } from 'next/server';

import { env } from '@/lib/config/env';

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

const buildTargetUrl = (request: NextRequest, path: string[]): URL => {
  const pathname = `/${path.join('/')}`;
  const targetUrl = new URL(pathname + request.nextUrl.search, env.apiBaseUrl);
  return targetUrl;
};

let proxyRequestCounter = 0;

const sanitizeBodyPreview = (body: string, maxLength = 2_000) => {
  if (body.length <= maxLength) {
    return body;
  }
  return `${body.slice(0, maxLength)}… (truncated ${body.length - maxLength} chars)`;
};

const forwardRequest = async (request: NextRequest, path: string[]) => {
  const requestId = ++proxyRequestCounter;
  const targetUrl = buildTargetUrl(request, path);
  const headers = stripHopByHopHeaders(new Headers(request.headers));
  headers.delete('host');
  headers.set('accept', headers.get('accept') ?? 'application/json');

  const isBodylessMethod = request.method === 'GET' || request.method === 'HEAD';
  const body = isBodylessMethod ? undefined : await request.arrayBuffer();

  const bodyPreview =
    body === undefined
      ? undefined
      : sanitizeBodyPreview(new TextDecoder().decode(body));

  if (bodyPreview) {
    console.warn(`📡 [OpenCell Proxy #${requestId}] → ${request.method} ${targetUrl.toString()}`, {
      body: bodyPreview,
    });
  } else {
    console.warn(`📡 [OpenCell Proxy #${requestId}] → ${request.method} ${targetUrl.toString()}`);
  }

  const response = await fetch(targetUrl, {
    method: request.method,
    headers,
    body,
  });

  const responseClone = response.clone();
  let responsePreview: string | undefined;
  try {
    const responseText = await responseClone.text();
    if (responseText) {
      responsePreview = sanitizeBodyPreview(responseText);
    }
  } catch (error) {
    console.warn(`📡 [OpenCell Proxy #${requestId}] Impossible de lire la réponse`, error);
  }

  if (responsePreview) {
    console.warn(
      `📡 [OpenCell Proxy #${requestId}] ← ${request.method} ${response.status} ${targetUrl.toString()}`,
      { body: responsePreview },
    );
  } else {
    console.warn(`📡 [OpenCell Proxy #${requestId}] ← ${request.method} ${response.status} ${targetUrl.toString()}`);
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
