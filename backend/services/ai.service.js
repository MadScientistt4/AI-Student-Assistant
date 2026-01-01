const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);

function buildPrompt(userInput, mode) {
  switch (mode) {
    case "explain":
      return `
You are an experienced university instructor.

Task:
Explain the following concept to a beginner student.

Rules:
- Use simple language
- Maximum 150 words
- If reliable information is not available, clearly say so

Concept:
${userInput}
`;

    case "mcq":
      return `
You are an educational content generator.

Task:
Generate exactly 3 multiple-choice questions based on the topic below.

Rules:
- Output MUST be valid JSON
- Each question must have:
  - question
  - options (array of 4 strings)
  - correct_answer
- Do NOT add extra text outside JSON
- If information is insufficient, respond with "INSUFFICIENT_DATA"

Required JSON format:
{
  "questions": [
    {
      "question": "",
      "options": ["", "", "", ""],
      "correct_answer": ""
    }
  ]
}

Topic:
${userInput}
`;

    case "summarize":
      return `
You are a professional text summarization assistant.

Task:
Summarize the following text.

Rules:
- Maximum 100 words
- Do not introduce new information
- Maintain original meaning

Text:
${userInput}
`;

    case "improve":
      return `
You are a writing quality assistant.

Task:
Improve clarity, grammar, and tone of the text below.

Rules:
- Do not change the original meaning
- Do not add new facts

Text:
${userInput}
`;

    default:
      throw new Error("Invalid mode");
  }
}

async function generateFromAI(userInput, mode) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = buildPrompt(userInput, mode);

  const result = await model.generateContent(prompt);
  const response = await result.response;

  return response.text();
}

module.exports = { generateFromAI };
