const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve('src/assets/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015'
    }]
  },
  plugins: [
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 3000,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        proxy: 'http://localhost:3100/'
      },
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }
    )
  ],
  devServer: {
    contentBase: path.resolve('src'),
    publicPath: '/assets/js',
    compress: true,
    port: 3100,
    watchContentBase: true,
    watchOptions: {
      // Bower files and postcss ignored, reload when "style-module.html" is compiled(modified)
      ignored: ['src/assets/bower/**/*', 'src/components/**/*.postcss'],
      poll: true
    },
    hot: true,
    inline: true
  }
}