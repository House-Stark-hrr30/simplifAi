const path = require('path');
// const autoprefixer = require('autoprefixer');

const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/build');

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
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
      // {
        
      //   test: /\.css$/,
      //   include: SRC_DIR,
      //   use: [
      //     require.resolve('style-loader'),
      //     {
      //       loader: require.resolve('css-loader'),
      //       options: {
      //         importLoaders: 1,
      //       },
      //     },
      //     {
      //       loader: require.resolve('postcss-loader'),
      //       options: {
      //         // Necessary for external CSS imports to work
      //         // https://github.com/facebookincubator/create-react-app/issues/2677
      //         ident: 'postcss',
      //         plugins: () => [
      //           require('postcss-flexbugs-fixes'),
      //           autoprefixer({
      //             browsers: [
      //               '>1%',
      //               'last 4 versions',
      //               'Firefox ESR',
      //               'not ie < 9', // React doesn't support IE8 anyway
      //             ],
      //             flexbox: 'no-2009',
      //           }),
      //         ],
      //       },
      //     },
      //   ],  
      // }
    ]
  }
};