import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Contact form has been replaced with direct contact links
  // This endpoint is no longer used
  return NextResponse.json(
    { message: "Please contact via email or social links" },
    { status: 200 }
  );
}
