const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssVariables = require('postcss-css-variables');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    style: './src/blog-style.css',
    app: './src',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'buble-loader',
      },
      {
        test: /\.css$/,
        loader: isProd ?
          ExtractTextPlugin.extract('css-loader?!postcss-loader') :
          'style-loader!css-loader!postcss-loader',
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js'],
  },

  externals: ['angular', 'angular-route'],

  performance: {
    hints: isProd ? 'warning' : false,
  },

  devtool: isProd ? 'source-map' : 'cheap-module-source-map',

  devServer: {
    host: '0.0.0.0',
    stats: {
      colors: true,
      chunks: false,
    },
    historyApiFallback: true,
    proxy: {
      '/article': {
        target: 'http://192.168.2.155:4000/',
        secure: false,
      },
      '/admin': {
        target: 'http://192.168.2.155:4000/',
        secure: false,
      },
    },
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
          postcssVariables({
            variables: {
              '--main-colour': '#3498db',
              '--main-colour-dark': '#2980b9',

              '--fade-color': '#ecf0f1',
              '--fade-color-dark': '#bdc3c7',

              '--danger-colour': '#e74c3c',
              '--danger-colour-dark': '#c0392b',
            },
          }),
        ],
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ].concat(isProd ? [
    new ExtractTextPlugin('css/[name].css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: true,
    }),
  ] : [
    new webpack.NoErrorsPlugin(),
  ]),
};