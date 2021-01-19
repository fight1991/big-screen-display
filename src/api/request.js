import axios from 'axios'
// 根据环境不同引入不同api地址
const curWwwPath = window.location.href
const pathName = window.location.pathname
const pos = curWwwPath.indexOf(pathName)
const env = process.env.NODE_ENV

const baseApi =
  env === 'production'
    ? curWwwPath.substring(0, pos)
    : ''
    // 'https://5g.andedu.com.cn:10000' // 致学阿里云服务器API接口地址

// create an axios instance
const service = axios.create({
  baseURL: baseApi, // url = base api url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

export default service
