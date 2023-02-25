const path = require("path");
const { webpack,ProvidePlugin } = require("webpack");
const Dotenv = require('dotenv-webpack');

module.exports = {
  
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath:"/",
    },
    plugins:[
      new Dotenv(),
    ],
    devServer: {
        static: "./dist",
        allowedHosts: ['all'],
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
    ]
    }
}