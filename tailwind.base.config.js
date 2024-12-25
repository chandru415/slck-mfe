// tailwind.base.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./apps/**/!(*.stories|*.spec).{ts,html}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
