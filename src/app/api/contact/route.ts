import { NextResponse } from "next/server";
import { saveContact } from "@/lib/db/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { ok: false, error: "Invalid request." },
        { status: 400 },
      );
    }

    const result = await saveContact({
      name: typeof body.name === "string" ? body.name : "",
      email: typeof body.email === "string" ? body.email : "",
      topic: typeof body.topic === "string" ? body.topic : "general",
      message: typeof body.message === "string" ? body.message : "",
      siteUrl: typeof body.siteUrl === "string" ? body.siteUrl : undefined,
    });

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: 400 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact submit failed:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
