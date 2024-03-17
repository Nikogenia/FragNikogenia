import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'text': '#E1EFFF',
      'background': '#10263D',
      'primary': '#3981c8',
      'secondary': '#78b0e8',
      'accent': '#f0aa64',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#999999',
      'transparent': 'transparent'
    },
    fontFamily: {
      sans: ['var(--font-inter)'],
      mono: ['var(--font-roboto-mono)'],
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
