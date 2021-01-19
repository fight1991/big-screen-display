const px2rem = require('postcss-px2rem')
const express = require('express')
const webpack = require('webpack')
const app = express()

var apiRoutes = express.Router();
app.use('/apis', apiRoutes)

module.exports = {
  publicPath: '/scyd/',
  outputDir: 'scyd', //  生产环境构建文件的目录
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录
  css: {
    loaderOptions: {
      // postcss: {
      //   plugins: [
      //     px2rem({
      //       remUnit: 100,
      //       "plugins": {
      //         "autoprefixer": {},
      //         "postcss-px2rem-exclude":{
      //           "remUnit": 75,
      //           "exclude":"/node_modules/i"
      //         }
      //       }
      //     })
      //   ]
      // }
    }
  },
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 8080,
    https: false,
    proxy: { //配置跨域
      '/api': {
        target: 'http://localhost:5001', //后台的地址
        changOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
}
