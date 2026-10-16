import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        archive: {
          paper: "#f8f7f4",
          ink: "#111111",
          mist: "#eeeee9",
          graphite: "#62645d",
          red: "#c8102e",
          stone: "#b8b1a6"
        }
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "PingFang SC", "Microsoft YaHei", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        editorial: ["Helvetica Neue", "Arial", "PingFang SC", "Microsoft YaHei", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        editorial: "0 24px 60px rgba(17, 17, 17, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
