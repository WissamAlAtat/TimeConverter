import React from "react";

export default function TimezoneSelect({ value, onChange, options, label }) {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-600">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg px-3 py-2"
      >
        {options.map((tz, idx) => (
          <option key={idx} value={tz}>
            {tz}
          </option>
        ))}
      </select>
    </div>
  );
}
