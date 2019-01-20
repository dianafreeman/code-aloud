const webpack = require('webpack');
const path = require('path');
/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components|vendor|assets)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
      }
    ]
  },
  stats: {
    colors: true
  },
  node: {
   net: 'empty',
   fs: "empty"
  },
  devServer: {
  	// Display only errors to reduce the amount of output.
    stats: "errors-only",
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: true, // Open the page in browser
    contentBase: path.join(__dirname,'dist'),
    compress: true,
    overlay: true

  },
    plugins: [new UglifyJSPlugin({sourceMap: true})]

};

