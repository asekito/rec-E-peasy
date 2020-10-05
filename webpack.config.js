const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = (env) => {
  return {
    mode: env.mode,
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "/public/dist"),
    },
    optimization: {
      usedExports: true,
      minimizer: [new TerserPlugin()],
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
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|sbg|jpg|jpeg|gif)$/,
          use: ["file-loader"],
        },
      ],
    },
    performance: {
      hints: "warning",
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith(".js");
      },
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
      new MiniCssExtractPlugin(),
      // new BundleAnalyzerPlugin(),
    ],
  };
};
