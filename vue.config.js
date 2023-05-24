const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    proxy: {
      '/api': {
        target: "http://localhost:3000/",
        changeOrigin: true,
        pathRewrite: {
          '^/api':''
        }
      }
    }
  }
})

 