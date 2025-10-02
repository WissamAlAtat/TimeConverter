🌍 Timezone Converter

A modern React application that allows you to convert time between different timezones, using live timezone data from a free API.
It supports both manual time input and real-time conversion of the current time, with formatting options for 24-hour and 12-hour (AM/PM) display.

✨ Features

📡 Live Timezone Data – Fetched from timeapi.io
 to always stay up-to-date.

⏰ Convert Time – Input a time in one timezone and convert it to another instantly.

🕒 Time Now Button – Get the current time in one timezone converted to another in real-time.

🔄 Format Toggle – Choose between 24h format (HH:mm) or 12h format (hh:mm AM/PM).

🎨 Modern UI – Clean, responsive, and styled with TailwindCSS.

🛠️ Tech Stack

React 18 (Create React App)

Luxon – Reliable date & time handling

TailwindCSS – Utility-first styling

timeapi.io – Free timezone API

📂 Project Structure
timezone-converter/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── TimeInput.jsx
│   │   ├── TimezoneSelect.jsx
│   │   └── ResultDisplay.jsx
│   │
│   ├── services/            # API & utility logic
│   │   ├── timezoneApi.js
│   │   └── timeConverter.js
│   │
│   ├── App.js               # Main app component
│   ├── index.js             # React entry point
│   └── index.css            # Tailwind setup
│
├── package.json
└── tailwind.config.js

🚀 Getting Started
1. Clone the repository
git clone https://github.com/yourusername/timezone-converter.git
cd timezone-converter

2. Install dependencies
npm install

3. Start the app
npm start


The app will be available at http://localhost:3000
 🌐.

🔧 Usage

Select a source timezone and a target timezone.

Enter a time in the source timezone (e.g., 14:30).

Click Convert Time → The converted time appears in the target timezone.

Or click Time Now → Instantly get the current time converted.

Use the Format Selector to switch between 24h and 12h AM/PM.

📡 API Reference

This app uses timeapi.io
 to fetch the list of available timezones:

GET https://timeapi.io/api/TimeZone/AvailableTimeZones


Returns an array of timezone strings, e.g.:

[
  "Africa/Abidjan",
  "America/New_York",
  "Europe/Paris",
  "Asia/Tokyo"
]

📸 Screenshots (Optional)

Add here screenshots or GIFs of your app in action.

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit pull requests.

📜 License

This project is licensed under the MIT License – free to use, modify, and distribute.