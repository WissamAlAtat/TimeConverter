import React from "react";

export default function ResultDisplay({ result }) {
  return (
    result && (
      <div className="mt-4 text-center text-lg font-semibold text-green-700">
        {result}
      </div>
    )
  );
}
