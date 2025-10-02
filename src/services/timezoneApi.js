export async function fetchTimezones() {
  const response = await fetch("https://timeapi.io/api/TimeZone/AvailableTimeZones");
  if (!response.ok) {
    throw new Error("Failed to fetch timezones");
  }
  return response.json();
}
