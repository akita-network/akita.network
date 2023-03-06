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
        "button-bg": "rgba(127, 146, 241, 0.25)",
        "button-border": "rgba(127, 146, 241, 0.22)",
        "language-border": "rgba(127, 146, 241, 0.4)",
        "badge-bg": "hsla(0, 0%, 100%, 0.05)"
      },
      spacing: {
        "full-negative": "-100%"
      },
      maxWidth: {
        '3xl': '120rem',
        "90vw": '90vw'
      },
      width: {
        "128": "30rem"
      },
      height: {
        "18": "4.125rem"
      },
      transitionProperty: {
        'max-height': "max-height"
      },
      fontSize: {
        '4xl': '2.438rem',
        "1375xl": '1.375rem',
        "preamble": ["1.375rem", "1.688rem"],
        "h2": ["3.25rem", "3.938rem"],
        "h3": ["2.375rem", "2.875rem"]
      },
      borderRadius: {
        "rounded-md": "0.313rem"
      }
    }
  },
};