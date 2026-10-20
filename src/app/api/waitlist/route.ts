import { NextResponse } from "next/server";
import { joinWaitlist } from "@/lib/db/waitlist";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const email = typeof body?.email === "string" ? body.email : "";

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Email is required." },
        { status: 400 }
      );
    }

    const result = await joinWaitlist(email);

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({
      ok: true,
      position: result.position,
      already: result.already,
    });
  } catch (error) {
    console.error("Waitlist join failed:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
