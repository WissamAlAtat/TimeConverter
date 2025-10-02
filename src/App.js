import React, { useEffect, useState } from "react";
import { fetchTimezones } from "./services/timezoneApi";
import { convertTime, convertNow } from "./services/timeConverter";
import TimeInput from "./components/TimeInput";
import TimezoneSelect from "./components/TimezoneSelect";
import ResultDisplay from "./components/ResultDisplay";

function App() {
  const [timezones, setTimezones] = useState([]);
  const [fromTz, setFromTz] = useState("");
  const [toTz, setToTz] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [convertedTime, setConvertedTime] = useState("");
  const [timeFormat, setTimeFormat] = useState("24h");

  useEffect(() => {
    fetchTimezones().then((data) => {
      setTimezones(data);
      if (data.length > 1) {
        setFromTz(data[0]);
        setToTz(data[1]);
      }
    });
  }, []);

  const handleConvert = () => {
    if (!inputTime || !fromTz || !toTz) return;
    const result = convertTime(inputTime, fromTz, toTz, timeFormat);
    if (!result) {
      setConvertedTime("❌ Invalid time format. Use HH:mm (24-hour).");
    } else {
      setConvertedTime(`${result} (${toTz})`);
    }
  };

  const handleNow = () => {
    if (!fromTz || !toTz) return;
    const result = convertNow(fromTz, toTz, timeFormat);
    setConvertedTime(`${result} (${toTz})`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4">
        <h1 className="text-xl font-bold text-gray-800 text-center">
          🌍 Timezone Converter
        </h1>

        <TimeInput value={inputTime} onChange={setInputTime} />

        <TimezoneSelect
          label="From Timezone"
          value={fromTz}
          onChange={setFromTz}
          options={timezones}
        />

        <TimezoneSelect
          label="To Timezone"
          value={toTz}
          onChange={setToTz}
          options={timezones}
        />

        {/* Format Selector */}
        <div>
          <label className="block mb-2 font-medium text-gray-600">
            Time Format
          </label>
          <select
            value={timeFormat}
            onChange={(e) => setTimeFormat(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="24h">24-hour (HH:mm)</option>
            <option value="12h">12-hour (hh:mm a)</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleConvert}
            className="flex-1 bg-blue-600 text-white py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Convert Time
          </button>
          <button
            onClick={handleNow}
            className="flex-1 bg-green-600 text-white py-2 rounded-xl shadow hover:bg-green-700 transition"
          >
            Time Now
          </button>
        </div>

        <ResultDisplay result={convertedTime} />
      </div>
    </div>
  );
}

export default App;
