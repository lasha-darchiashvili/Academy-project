import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export default function middleware(request) {
  let cookie = request.cookies.get("token");

  if (!cookie && new URL(request.url).pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (new URL(request.url).pathname === "/login" && cookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/profile", "/contact", "/login", "/landing", "/blogs"],
};
