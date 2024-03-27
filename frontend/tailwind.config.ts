import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'text': '#ffffff',
      'text-gray': '#bbbbbb',
      'background': '#000000',
      'primary': '#ffc453',
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
