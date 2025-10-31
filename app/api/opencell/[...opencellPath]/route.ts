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

const forwardRequest = async (request: NextRequest, path: string[]) => {
  const targetUrl = buildTargetUrl(request, path);
  const headers = stripHopByHopHeaders(new Headers(request.headers));
  headers.delete('host');
  headers.set('accept', headers.get('accept') ?? 'application/json');

  const isBodylessMethod = request.method === 'GET' || request.method === 'HEAD';
  const body = isBodylessMethod ? undefined : await request.arrayBuffer();

  const response = await fetch(targetUrl, {
    method: request.method,
    headers,
    body,
  });

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

export async function GET(
  request: NextRequest,
  context: { params: { opencellPath: string[] } },
) {
  return handle(request, context.params.opencellPath ?? []);
}

export async function POST(
  request: NextRequest,
  context: { params: { opencellPath: string[] } },
) {
  return handle(request, context.params.opencellPath ?? []);
}

export async function PUT(
  request: NextRequest,
  context: { params: { opencellPath: string[] } },
) {
  return handle(request, context.params.opencellPath ?? []);
}

export async function PATCH(
  request: NextRequest,
  context: { params: { opencellPath: string[] } },
) {
  return handle(request, context.params.opencellPath ?? []);
}

export async function DELETE(
  request: NextRequest,
  context: { params: { opencellPath: string[] } },
) {
  return handle(request, context.params.opencellPath ?? []);
}

export async function OPTIONS(
  request: NextRequest,
  context: { params: { opencellPath: string[] } },
) {
  return handle(request, context.params.opencellPath ?? []);
}
