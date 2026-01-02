import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("API Contact Error:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to submit form" },
      { status: 500 }
    );
  }
}
