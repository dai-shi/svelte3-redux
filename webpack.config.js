/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkerPlugin = require('worker-plugin');
/* eslint-enable @typescript-eslint/no-var-requires */

const { DIR, EXT = 'ts' } = process.env;

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: `./examples/${DIR}/src/index.${EXT}`,
  output: {
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./examples/${DIR}/public/index.html`,
    }),
    new WorkerPlugin(),
  ],
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    }, {
      test: /\.svelte$/,
      use: {
        loader: 'svelte-loader',
        options: {
          hotReload: true,
        },
      },
    }],
  },
  resolve: {
    alias: {
      svelte: `${__dirname}/node_modules/svelte`,
      'svelte3-redux': `${__dirname}/src`,
    },
    extensions: ['.mjs', '.js', '.ts', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  devServer: {
    port: process.env.PORT || '8080',
    contentBase: `./examples/${DIR}/public`,
    historyApiFallback: true,
  },
};
