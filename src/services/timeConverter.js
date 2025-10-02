import { DateTime } from "luxon";

export function convertTime(inputTime, fromTz, toTz, format = "24h") {
  const dt = DateTime.fromFormat(inputTime, "HH:mm", { zone: fromTz });
  if (!dt.isValid) return null;

  const fmt = format === "24h" ? "HH:mm" : "hh:mm a";
  return dt.setZone(toTz).toFormat(fmt);
}

export function convertNow(fromTz, toTz, format = "24h") {
  const now = DateTime.now().setZone(fromTz);
  const fmt = format === "24h" ? "HH:mm" : "hh:mm a";
  return now.setZone(toTz).toFormat(fmt);
}
