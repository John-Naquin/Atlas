import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      customBlue: '#9978CF', 
      customDarkBlue: '#426B7F', 
      customGray: '#EEEEEE', 
      customBlack: '#000000',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', 
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))', 
        'custom-linear-gradient': 'linear-gradient(to right, #9978CF, #426B7F)', 
        'custom-radial-gradient': 'radial-gradient(circle, #9978CF, #426B7F)', 
      },
    },
  },
  
  plugins: [],
};

export default config;
