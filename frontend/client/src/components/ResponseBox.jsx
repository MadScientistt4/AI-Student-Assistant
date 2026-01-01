export default function ResponseBox({ response }) {
  if (!response) return null;

  return (
    <div className="mt-6 p-4 bg-white border rounded shadow">
      <h2 className="font-semibold mb-2">AI Response</h2>
      <pre className="whitespace-pre-wrap text-sm">{response}</pre>
    </div>
  );
}
