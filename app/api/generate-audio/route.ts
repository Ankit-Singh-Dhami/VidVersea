import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const kokoroUrl = "https://voice-generator.pages.dev/api/v1/";

    const kokoroRes = await fetch(kokoroUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        // ✅ Voice formula (you can change weights)
        voice: "af_heart*0.8 + af_soft*0.2",
        format: "mp3",
      }),
    });

    if (!kokoroRes.ok) {
      const errorText = await kokoroRes.text();
      return NextResponse.json({ error: errorText }, { status: 500 });
    }

    const audioBuffer = await kokoroRes.arrayBuffer();

    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
