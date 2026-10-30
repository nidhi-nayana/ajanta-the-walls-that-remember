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
        obsidian: "#100D0B",
        sandstone: "#C6A77A",
        sienna: "#A34D32",
        antiqueGold: "#C5A15A",
        caveCharcoal: "#211B17",
        parchment: "#E7D5B5",
        forestGreen: "#344638",
        ajanta: {
          bg: "#100D0B",
          surface: "#181411",
          card: "#211B17",
          border: "#3D3128",
          gold: "#C5A15A",
          sand: "#C6A77A",
          sienna: "#A34D32",
          parchment: "#E7D5B5",
          green: "#344638",
        },
      },
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", "Georgia", "serif"],
        cinzel: ["'Cinzel'", "Georgia", "serif"],
        inter: ["'Inter'", "system-ui", "sans-serif"],
        dmsans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'fresco-gradient': 'radial-gradient(ellipse at center, rgba(197, 161, 90, 0.15) 0%, rgba(16, 13, 11, 0.95) 75%)',
        'gold-shimmer': 'linear-gradient(135deg, #C5A15A 0%, #E7D5B5 50%, #A34D32 100%)',
        'cave-depth': 'linear-gradient(180deg, #100D0B 0%, #181411 50%, #100D0B 100%)',
      },
      animation: {
        'lamp-flicker': 'flicker 4s infinite ease-in-out',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '25%': { opacity: '0.7', transform: 'scale(0.98)' },
          '50%': { opacity: '0.95', transform: 'scale(1.02)' },
          '75%': { opacity: '0.75', transform: 'scale(0.99)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
