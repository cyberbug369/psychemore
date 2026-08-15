import { NextResponse } from "next/server";
import { opportunities } from "../../lib/opportunities";

export async function GET() {
  return NextResponse.json({
    opportunities,
    count: opportunities.length,
  });
}