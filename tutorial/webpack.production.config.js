const path = require('path');
// JS圧縮プラグイン
// const TerserPlugin = require('terser-webpack-plugin');
// CSS別出しプラグイン
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// webpack distの中身削除プラグイン
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// html用プラグイン
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    'toriniku': './src/toriniku.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    // 相対パスの場合
    // publicPath: 'dist/'
    // 絶対パスの場合
    // publicPath: 'https://jws.work/assets/img/toriniku.jpg',
    publicPath: ''
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: "all",
      // minSize: 10000,
      // automaticNameDelimiter: '_'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['transform-class-properties']
          }
        }
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }
    ]
  },
  plugins: [
    // new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*')
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks: ['hello-world','vendors~hello-world~toriniku'],
      title: 'Hello world',
      template: 'src/page-template.hbs',
      description: 'some-description'
      // filename: 'subfolder/custom_filename.html',
      // meta: {
      //   viewport: 'width=device-width, initial-scale=1.0'
      // }
    }),
    new HtmlWebpackPlugin({
      filename: 'toriniku.html',
      chunks: ['toriniku','vendors~hello-world~toriniku'],
      title: 'toriniku',
      template: 'src/page-template.hbs',
      description: 'some-description'
    })
  ]
};
