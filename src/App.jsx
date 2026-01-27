import React from "react";

export default function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Custom Scrollbar Demo</h1>

      <div className="overflow-y-scroll scrollbar-custom border rounded-lg p-4 bg-white">
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={i} className="mb-2 text-gray-900">
            Line #{i + 1} — scroll me!
          </p>
        ))}
      </div>
    </div>
  );
}
