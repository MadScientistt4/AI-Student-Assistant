export async function generateAIResponse(payload) {
  const res = await fetch("http://localhost:5000/api/ai/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Failed to fetch AI response");
  return res.json();
}
