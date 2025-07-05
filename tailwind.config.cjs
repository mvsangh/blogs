const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        theme: {
          'primary-bg': 'var(--color-primary-bg)',
          'surface-bg': 'var(--color-surface-bg)',
          'primary-text': 'var(--color-primary-text)',
          'secondary-text': 'var(--color-secondary-text)',
          'primary-accent': 'var(--color-primary-accent)',
          'secondary-accent': 'var(--color-secondary-accent)',
          'cta-warning': 'var(--color-cta-warning)',
          'error-danger': 'var(--color-error-danger)',
          'border': 'var(--color-border)',
          'hover-bg': 'var(--color-hover-bg)',
          'code-bg': 'var(--color-code-bg)',
          'link': 'var(--color-link)',
          'link-hover': 'var(--color-link-hover)',
        }
      },
    },
  },
};
