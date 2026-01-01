import { useState } from "react";
import InputForm from "./components/InputForm";
import ResponseBox from "./components/ResponseBox";
import Loader from "./components/Loader";
import { generateAIResponse } from "./services/ai.api";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (data) => {
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await generateAIResponse(data);
      setResponse(res.response);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">
          AI-Powered Student Assistant
        </h1>

        <InputForm onSubmit={handleSubmit} loading={loading} />

        {loading && <Loader />}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <ResponseBox response={response} />
      </div>
    </div>
  );
}
