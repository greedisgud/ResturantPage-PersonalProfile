const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    poll: 1000,
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
