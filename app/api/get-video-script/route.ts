import { generateGeminiJSON } from "@/configs/AiModel";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 1️⃣ Get full response text
    const rawText = await generateGeminiJSON(prompt);

    // 2️⃣ Convert string → JSON
    let parsedData;
    try {
      if (rawText == undefined) {
        throw new Error("Response is undefined");
      }
      parsedData = JSON.parse(rawText);
    } catch (err) {
      console.error("JSON Parse Error:", rawText);
      return new Response(
        JSON.stringify({
          error: "Invalid JSON returned by Gemini",
          raw: rawText,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // 3️⃣ Return clean JSON
    return new Response(JSON.stringify(parsedData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to generate response",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
