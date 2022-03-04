const merge = require("webpack-merge");
const base = require("./base");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(base, {
  mode: "production",
  output: {
    filename: 'bundle.min.js?v=' + Date.now(),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./assets", to: 'src/assets'},
        { from: "../.env", to: ''},
      ],
    }),
  ],
  devtool: false,
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
});
