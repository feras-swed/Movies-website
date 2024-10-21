/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': {
          'light': '#f05454', //  درجة الأحمر الفاتح
          'dark': '#b80727',
          'hover': '#d94343', //  لون التحديد
          'active': '#c33232',  //  درجة الأحمر الداكن
        },
        'background': {
          'light': '#ffffff', //  أبيض
          'dark': '#121212', //  أسود داكن
        },
      },
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
};
