const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "seven-hyperlink": "var(--seven-hyperlink)",
        "seven-hyperlink-hover": "var(--seven-hyperlink-hover)",
        "seven-bg-navbar": "var(--seven-bg-navbar)",
        "seven-bg-bread": "var(--seven-bg-bread)",
        "seven-foreground-light": "var(--seven-foreground-light)",
        "seven-foreground-dark": "var(--seven-foreground-dark)",
        "seven-bg-table": "var(--seven-bg-table)",
        "seven-bg-blue-light": "var(--seven-bg-blue-light)",
        "seven-page-heading": "var(--seven-page-heading)",
        "seven-page-subheading": "var(--seven-page-subheading)",
        "seven-bg-button-primary": "var(--seven-bg-button-primary)",
        "seven-bg-table-heading": "var(--seven-bg-table-heading)",
        "seven-border-filter": "var(--seven-border-filter)",
        "seven-navbar-brand": "var(--seven-navbar-brand)",
        "seven-border-grey": "var(--seven-border-grey)",
        "seven-border-button-primary": "var(--seven-border-button-primary)",
        "seven-bg-presensi-exist": "var(--seven-bg-presensi-exist)",
        "seven-bg-presensi-skip": "var(--seven-bg-presensi-skip)",
        "seven-bg-presensi-done": "var(--seven-bg-presensi-done)",
        "seven-selected-item-dark": "var(--seven-selected-item-dark)",
        "seven-hover-light": "var(--seven-hover-light)",
        "seven-filter": "var(--seven-filter)",
        "seven-bg-button-primary-hover": "var(--seven-bg-button-primary-hover)",
        "seven-bg-button-dark": "var(--seven-bg-button-dark)",
        "seven-border-button-dark": "var(--seven-border-button-dark)",
        "seven-bg-button-dark-hover": "var(--seven-bg-button-dark-hover)"
      },
      fontSize: {
        "seven-font-size-default": "var(--seven-font-size-default)",
        "seven-font-size-page-title": "var(--seven-font-size-page-title)",
        "seven-font-size-page-subtitle": "var(--seven-font-size-page-subtitle)",
        "seven-font-size-table-content": "var(--seven-font-size-table-content)",
        "seven-font-size-footer-title": "var(--seven-font-size-footer-title)",
        "seven-font-size-footer-body": "var(--seven-font-size-footer-body)",
        "seven-font-size-footer-icons": "var(--seven-font-size-footer-icons)",
        "seven-font-size-navbar-dropdown":
          "var(--seven-font-size-navbar-dropdown)",
        "seven-font-size-navbar-brand": "var(--seven-font-size-navbar-brand)",
        "seven-font-size-table-heading": "var(--seven-font-size-table-heading)",
        "seven-font-size-filter": "var(--seven-font-size-filter)",
        "seven-font-size-modal-title": "var(--seven-font-size-modal-title)",
        "seven-font-size-modal-content": "var(--seven-font-size-modal-content)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
