var webpack = require('webpack');

module.exports = {
  entry: './src/addtocalendar.js',
  output: {
    path: 'dist',
    filename: 'addtocalendar.min.js'
  },
  externals: {
    'moment': 'commonjs moment'
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
  devtool: 'source-map'
};
