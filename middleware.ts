import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (token && request.nextUrl.pathname.startsWith("/auth/login")) {
    return Response.redirect(new URL("/", request.url));
  }

  if (!token && request.nextUrl.pathname.startsWith("/my")) {
    return Response.redirect(new URL("/auth/login", request.url));
  }
}
