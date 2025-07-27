import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        discord: {
          'bg-primary': '#36393f',
          'bg-secondary': '#2f3136',
          'bg-tertiary': '#202225',
          'bg-chat': '#40444b',
          'text-primary': '#dcddde',
          'text-secondary': '#b9bbbe',
          'text-muted': '#72767d',
          'brand': '#5865f2',
          'brand-hover': '#4752c4',
          'green': '#3ba55d',
          'red': '#ed4245',
          'yellow': '#faa61a',
          'border': 'rgba(79, 84, 92, 0.48)',
        },
      },
      fontFamily: {
        discord: ['"gg sans"', '"Noto Sans"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
