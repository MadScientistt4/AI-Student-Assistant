const { generateFromAI } = require("../services/ai.service");

exports.generateAI = async (req, res) => {
  try {
    const { prompt, mode } = req.body;

    if (!prompt || !mode) {
      return res.status(400).json({ error: "Prompt and mode are required" });
    }

    const response = await generateFromAI(prompt, mode);
    res.json({ response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI generation failed" });
  }
};
