/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          50: '#f8fafc',
          500: '#64748b',
          600: '#475569',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  theme: {
       extend: {
  keyframes: {
    slideUp: {
      "0%": { marginTop:"0px", width:"calc(100% - 48px)", opacity: "1", translateY:"0px" },
      "100%": { marginTop:"-24px", width:"calc(100% - 0px)", opacity: "1", translateY:"0px" }
    },
    fadeIn: {
      "0%": { opacity: "0", transform: "translateY(50px)" },
      "100%": { opacity: "1", transform: "translateY(-16px)" }
    },
    slideLeft: {
      "0%": { transform: "translateX(-70)", opacity: "1" },
      "100%": { transform: "translateX(0px)", opacity: "1" }
    }
  },
  animation: {
    slideUp: "slideUp 0.3s ease-in-out forwards",
    fadeIn: "fadeIn 1s ease-in-out forwards",
    slideLeft: "slideLeft 0.4s ease-in-out 8s forwards"
  }
    }
  },
  plugins: [],
}
