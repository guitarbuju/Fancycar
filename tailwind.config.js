import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-xm': '667px', 
        'galaxys8-xm':'740px'
        
      },
    },
  },
  plugins: [daisyui],
}