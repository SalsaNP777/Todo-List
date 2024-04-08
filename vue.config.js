const { defineConfig } = require('@vue/cli-service')
const backEndServer = 'http://localhost:8000'
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: backEndServer
  }
})
