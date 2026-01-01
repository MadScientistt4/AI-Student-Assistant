import { useState } from "react";

export default function InputForm({ onSubmit, loading }) {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("explain");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    onSubmit({ prompt, mode });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      <textarea
        className="w-full p-3 border rounded focus:outline-none focus:ring"
        rows="4"
        placeholder="Enter your question or text..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <select
        className="w-full p-2 border rounded"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="explain">Explain a concept</option>
        <option value="mcq">Generate MCQs</option>
        <option value="summarize">Summarize text</option>
        <option value="improve">Improve writing quality</option>
      </select>

      <button
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Submit"}
      </button>
    </form>
  );
}
