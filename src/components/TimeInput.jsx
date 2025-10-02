import React from "react";

export default function TimeInput({ value, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-600">
        Enter Time (HH:mm)
      </label>
      <input
        type="text"
        placeholder="e.g. 14:30"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 outline-none"
      />
    </div>
  );
}
