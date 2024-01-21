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
        'custom-xm': '667px',  // Add your custom breakpoints here
        
      },
    },
  },
  plugins: [daisyui],
}