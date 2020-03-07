module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/styles/globals.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      '/.netlify': {
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/.netlify/functions': ''
        }
      }
    }
  },
  transpileDependencies: []
}
