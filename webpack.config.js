const path = require("path");
const HtmlWepackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output:{path :path.resolve(__dirname, "dist")  },
  module: {
      rules:[
        {
          test: /\.js$/,
          exclude: "/node_modules/",
          use:["babel-loader"],
        },
        {
          test: /\.css$/,
          use:["style-loader","css-loader"]
        }
      ],
  },
  plugins: [
    new HtmlWepackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],

};