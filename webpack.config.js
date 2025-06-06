const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      // Add loaders here if you use other file types (e.g., Babel for ES6)
    ],
  },
  externals: [
    // Exclude node_modules from the bundle
    require('webpack-node-externals')(),
  ],
  resolve: {
    extensions: ['.js'],
  },
  mode: 'production',
}; 