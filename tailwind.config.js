/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      // ─── Brand Colors ───────────────────────────────────────────────────────
      colors: {
        "cm-blue":     "#2f5acf",  // primary accent / links
        "cm-blue-new": "#273bce",  // NEW badge
        "cm-link":     "#1a237e",  // dark-blue hyperlinks
        "cm-brand":    "#2b5aa5",  // social btn border / brand text
        "cm-orange":   "#ff6600",  // sports highlight
        "cm-cyan":     "#55cbf9",  // announcement link
        "cm-dark":     "#2d2d2d",  // announcement background
        "cm-red-dark": "#d62828",  // mobile nav highlight-red
        navy:          "#000080",  // swatch navy
        beige:         "#f5f5dc",  // swatch beige
        "gray-swatch": "#808080",  // swatch grey
      },

      // ─── Typography ────────────────────────────────────────────────────────
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
      },

      // ─── Layout ────────────────────────────────────────────────────────────
      maxWidth: {
        container: "1240px",
      },
      height: {
        hero: "550px",
      },
      width: {
        sidebar: "260px",
      },

      // ─── Z-index scale ─────────────────────────────────────────────────────
      zIndex: {
        90:   "90",
        999:  "999",
        1000: "1000",
        1001: "1001",
        2000: "2000",
        2001: "2001",
        9999: "9999",
      },

      // ─── Grid layouts ──────────────────────────────────────────────────────
      gridTemplateColumns: {
        "mega-menu": "1fr 1fr 1fr 1fr 350px",  // desktop mega-menu
        "footer-5":  "repeat(5, 1fr)",          // footer main links
      },

      // ─── Custom breakpoints ────────────────────────────────────────────────
      // Original breakpoints: 740px (tablet) and 1024px (desktop)
      screens: {
        tablet:  "740px",
        desktop: "1024px",
      },

      // ─── Keyframe animations ───────────────────────────────────────────────
      keyframes: {
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(100%)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        fadeOut: {
          to: { opacity: "0", visibility: "hidden" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(-5px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "toast-in":   "slideInLeft 0.5s ease",
        "toast-out":  "fadeOut 0.5s 3.5s forwards",
        "fade-in-up": "fadeInUp 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
