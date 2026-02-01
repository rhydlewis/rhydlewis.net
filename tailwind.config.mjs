/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Neutral palette for minimalist design
        surface: {
          DEFAULT: '#ffffff',
          dark: '#0a0a0a',
        },
        muted: {
          DEFAULT: '#f5f5f5',
          dark: '#171717',
        },
        border: {
          DEFAULT: '#e5e5e5',
          dark: '#262626',
        },
        text: {
          DEFAULT: '#171717',
          muted: '#525252',
          dark: '#fafafa',
          'dark-muted': '#a3a3a3',
        },
        accent: {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
          dark: '#3b82f6',
          'dark-hover': '#60a5fa',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.text.DEFAULT'),
            '--tw-prose-headings': theme('colors.text.DEFAULT'),
            '--tw-prose-links': theme('colors.accent.DEFAULT'),
            '--tw-prose-bold': theme('colors.text.DEFAULT'),
            '--tw-prose-code': theme('colors.text.DEFAULT'),
            '--tw-prose-pre-bg': theme('colors.muted.DEFAULT'),
            maxWidth: '65ch',
            a: {
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: theme('colors.accent.hover'),
              },
            },
          },
        },
        dark: {
          css: {
            '--tw-prose-body': theme('colors.text.dark'),
            '--tw-prose-headings': theme('colors.text.dark'),
            '--tw-prose-links': theme('colors.accent.dark'),
            '--tw-prose-bold': theme('colors.text.dark'),
            '--tw-prose-code': theme('colors.text.dark'),
            '--tw-prose-pre-bg': theme('colors.muted.dark'),
            a: {
              '&:hover': {
                color: theme('colors.accent.dark-hover'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
