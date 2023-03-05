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
      },
      spacing: {
        "full-negative": "-100%"
      },
      maxWidth: {
        '3xl': '120rem',
      },
      width: {
        "4.6": "4.688rem",
      },
      transitionProperty: {
        'max-height': "max-height"
      }
    }
  },
};