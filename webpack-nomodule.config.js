const {resolve, join} = require('path');


/**
 * === ENV configuration
 */
const BROWSERS = ['> 1%', 'last 2 versions', 'Firefox ESR', 'not ie <= 11'];

/**
 * === Webpack configuration
 */
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        // We need to transpile Polymer itself and other ES6 code
        // exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              'env',
              {
                targets: {browsers: BROWSERS},
                debug: true
              }
            ]]
          }
        }
      }
    ]
  }
};
