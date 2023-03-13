const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      blue: colors.blue,
      slate: colors.slate,
      gray: colors.gray,
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      sky: colors.sky,
      lime: colors.lime,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      rose: colors.rose,
      teal: colors.teal,
      neutral: colors.neutral,
      violet: colors.violet,
      stone: colors.stone,
      yellow: colors.yellow,
    },
    backgroundPosition: {
      "50-50": "50% 50%"
    },
    extend: {
      colors: {
        dark: "#181818",
        "cta-bg": "rgba(127, 146, 241, 0.25)",
        "cta-border": "rgba(127, 146, 241, 0.22)",
        "language-border": "rgba(127, 146, 241, 0.4)",
        "badge-bg": "hsla(0, 0%, 100%, 0.05)",
        "green": "#1B3337",
        "green-lighter": "#1C4A50"
      },
      spacing: {
        "full-negative": "-100%"
      },
      maxWidth: {
        '1xl': '38.438rem',
        '3xl': '120rem',
        "8xl": "90rem",
        "9xl": "95rem",
        '80vw': '80vw',
        "90vw": '90vw',
        "95vw": '95vw',
      },
      width: {
        "18": "4.75rem",
        "128": "30rem"
      },
      height: {
        "17": "4.125rem",
        "18": "4.75rem",
        "90": "22.5rem"
      },
      transitionProperty: {
        'max-height': "max-height"
      },
      fontSize: {
        '4xl': '2.438rem',
        "1375xl": '1.375rem',
        "preamble": ["1.375rem", "1.688rem"],
        "h2": ["3.25rem", "3.938rem"],
        "h3": ["2.375rem", "2.875rem"],
        "h4": ["1.813rem", "2.188rem"]
      },
      borderRadius: {
        "rounded-md": "0.313rem"
      },
      opacity: {
        "3": "0.03"
      },
      boxShadow: {
        "cta": "0 8px 40px -9px #7f92f1"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        scrollL: {
          '0%': { left: 0 },
          '100%': { left: "-100%" }
        },
        scrollR: {
          '0%': { right: 0 },
          '100%': { right: "-100%" }
        }
      },
      animation: {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite': 'marquee 25s linear infinite',
        "scroll-infinite-left": 'scrollL 40s linear infinite',
        "scroll-infinite-right": 'scrollR 40s linear infinite'
      },
    }
  },
};