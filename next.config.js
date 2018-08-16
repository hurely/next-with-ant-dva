/* eslint-disable */
const withCss = require('@zeit/next-css')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => { }
}

module.exports = withCss({
  cssModules: true,
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(less)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.less$/,
        use: ['babel-loader', 'raw-loader', 'less-loader']
      },
      {
        test:/\.js$/,
        loader: 'babel-loader',
        options:{
          plugins: ['transform-decorators-legacy']
        }
      }
    );
    return config;
  },
})