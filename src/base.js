const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');
const dotEnv = require('dotenv').config( {
  path: path.join(__dirname, '/../.env')
} );

module.exports = {
  context: path.resolve(__dirname),
  mode: "development",
  entry: "./Config.js",
  output: {
    filename: "[contenthash].js",
    path: path.resolve(__dirname, "../build"),
  },
  devServer: {
    port: 4200,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "../index.html",
      minify: {
        collapseWhitespace: true,
      },
    }),
    new webpack.DefinePlugin( {
      "process.env": dotEnv.parsed
    } ),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff)$/,
        use: ["file-loader"],
      },
    ],
  },
};
