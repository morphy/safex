/**
 * @type {import("prettier").Config}
 */

const config = {
  trailingComma: "none",
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
