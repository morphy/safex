/**@type {import("prettier").Config}*/
const config = {
  trailingComma: "none",
  plugins: ["prettier-plugin-css-order"],
  overrides: [
    {
      files: ["*.svg", "*.xml"],
      options: {
        parser: "html"
      }
    }
  ]
};

module.exports = config;
