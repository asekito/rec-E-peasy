const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/App.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/public/dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "/public/dist/"),
    compress: true,
    port: 3001,
    historyApiFallback: true,
    proxy: {
      "/recipes": {
        target: "http://localhost:3000",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Rec-E-Peasy",
      template: "./public/index.html",
    }),
  ],
};
