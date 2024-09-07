import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      primary: "#4169E1", // Royal Blue
      secondary: "#F4F5FB", // Light Grayish Blue
      neutral: "#2F2F2F", // Dark Gray
      gray: "#A0A0A0", // Light Gray
      accent: "#FFDD57", // Soft Yellow
      success: "#32CD32", // Lime Green
      error: "#FF4F4F", // Soft Red
    },
  },
  plugins: [],
};
export default config;
