import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "controle-estoque-nextjs",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
}
