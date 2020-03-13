const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const URLImportPlugin = require("webpack-external-import/webpack");

module.exports = {

  mode : "development",
  entry : path.resolve(__dirname, "src", "main.jsx"),

  devServer : {
    contentBase : "./assets",
    inline : true,
    port : 8081
  },

  plugins : [
    new HtmlWebpackPlugin({
      template : path.resolve(__dirname, "templates", "index.ejs")
    }),
    new URLImportPlugin({
      manifestName : "wei-external-component",
      publicPath : "http://localhost:8081/"
    })
  ],

  output : {
    publicPath : "/",
    path : path.resolve(__dirname, "dist"),
    filename : "[name].js"
  },

  module : {
    rules : [{
      test : /\.jsx?$/,
      include : [path.resolve(__dirname, "src")],
      loader : "babel-loader",
      options : {
        presets : ["@babel/preset-env", "@babel/preset-react"]
      }
    }]
  }

};
