const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin');

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
        "learning-and-news": "#252525",
        "cta-bg": "rgba(127, 146, 241, 0.25)",
        "cta-border": "rgba(127, 146, 241, 0.22)",
        "language-border": "rgba(127, 146, 241, 0.4)",
        "badge-bg": "hsla(0, 0%, 100%, 0.05)",
        "progress-bg": "rgba(255, 255, 255, 0.13)",
        "green": "#1B3337",
        "green-lighter": "#1C4A50",
        "blob-border": "rgba(38, 195, 214, 0.34)",
        "blob-bg-start": "rgba(38, 195, 214, 0.05)",
        "blob-bg-end": "rgba(38, 195, 214, 0.01)",
        "blob-bg-hover-start": "rgba(38, 195, 214, 0.3)",
        "blob-bg-hover-end": "rgba(38, 195, 214, 0.1)"
      },
      borderWidth: {
        "0056": "0.056rem",
        "text": "0.024rem"
      },
      spacing: {
        "full-negative": "-100%"
      },
      maxWidth: {
        '1xl': '38.438rem',
        "2xl": "108rem",
        "8xl": "90rem",
        "9xl": "95rem",
        "80r": "80rem",
        "100r": "100rem",
        "120r": "120rem",
        "95%": "95%",
        '80vw': '80vw',
        "90vw": '90vw',
        "95vw": '95vw',
      },
      width: {
        "3575": "3.575rem",
        "18": "4.75rem",
        "128": "30rem",
        "70": "70% !important",
        "98": "98%"
      },
      height: {
        "25.75": "25.75rem",
        "17": "4.125rem",
        "18": "4.75rem",
        "90": "22.5rem"
      },
      minHeight: {
        "48": "12rem"
      },
      transitionProperty: {
        'max-height': "max-height"
      },
      fontSize: {
        "2378xl": ["2.378rem", "2.875rem"],
        '4xl': ["2rem", "2.438rem"],
        "1375xl": '1.375rem',
        "preamble": ["1.375rem", "1.688rem"],
        "h2": ["4rem", "4.8rem"],
        "h3": ["3.25rem", "3.938rem"],
        "h4": ["2.375rem", "2.875rem"],
        "h5": ["1.813rem", "2.188rem"]
      },
      borderRadius: {
        "rounded-md": "0.313rem",
      },
      opacity: {
        "3": "0.03"
      },
      boxShadow: {
        "cta": "0 8px 40px -9px #7f92f1",
        "cta-secondary": "0 8px 40px -9px #1B3337"
      },
      textShadow: {
        "white": "0 0px 2px #fff"
      },
      lineHeight: {
        "6.5": "1.625rem"
      },
      margin: {
        "1.875": "1.875rem"
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
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};