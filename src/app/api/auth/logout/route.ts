import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME } from "@/lib/auth";

export async function POST() {
  const response = NextResponse.json({ ok: true, redirectTo: "/login" });
  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: "",
    httpOnly: false,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return response;
}
