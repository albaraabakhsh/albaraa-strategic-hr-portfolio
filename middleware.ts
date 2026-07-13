import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-page-language", request.nextUrl.pathname === "/ar" || request.nextUrl.pathname.startsWith("/ar/") ? "ar" : "en");
  return NextResponse.next({ request: { headers } });
}

export const config = { matcher: ["/", "/ar/:path*"] };
