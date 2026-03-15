import { GoogleGenAI, ThinkingLevel } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY!,
});

export async function generateGeminiJSON(prompt: string) {
  const result = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    config: {
      thinkingConfig: {
        thinkingLevel: ThinkingLevel.LOW,
      },
      responseMimeType: "application/json", // 🔥 VERY IMPORTANT
    },
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  // Gemini returns text, not object
  const text = result.text;

  return text;
}
