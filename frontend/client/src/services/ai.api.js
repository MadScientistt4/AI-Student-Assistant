export async function generateAIResponse(payload) {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/ai/generate`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) throw new Error("Failed to fetch AI response");
  return res.json();
}
