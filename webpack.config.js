const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/js/components/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: './build.js'
  }
}