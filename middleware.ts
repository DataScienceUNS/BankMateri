import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect main application routes fron unauthenticated access
  if (pathname.startsWith("/app")) {
    const sessionCookie = getSessionCookie(request);
    if (!sessionCookie) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // Redirect authenticated users away from the login page
  if (pathname === "/login") {
    const sessionCookie = getSessionCookie(request);
    if (sessionCookie) {
      const homeUrl = new URL("/app", request.url);
      return NextResponse.redirect(homeUrl);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}
