/**
 * @type {import("prettier").Config}
 */

const config = {
  trailingComma: "none",
  plugins: ["@shopify/prettier-plugin-liquid"],
  proseWrap: "always",
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
