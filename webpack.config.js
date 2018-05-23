const path = require('path');

const SRC_DIR = path.join(__dirname, 'client', 'src');
const DIST_DIR = path.join(__dirname, 'client','build');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundles.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /(\.jsx?)/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", 'css-loader'],
        include : SRC_DIR
      },
      {
        test: /\.css$/,  
        include: /node_modules/,  
        loaders: ['style-loader', 'css-loader'],
      }
    ]
  }
};