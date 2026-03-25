// tailwind.config.js
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // other paths where Tailwind classes appear
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
