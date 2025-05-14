import axios from "axios"
import { showLoading, hidenLoading } from "@/components/loading/Loading"

// axios 全局配置
const request = axios.create({
  // baseURL: '',
  timeout: 3000,
  timeoutErrorMessage: "请求超时，请稍后再试",
  withCredentials: false
})

// axios 全局请求拦截器
request.interceptors.request.use(config => {
  // 请求之前的处理
  showLoading()
  // 解决get请求缓存问题，给每个get请求加个时间戳
  if (config.method == "get") {
    let timeStamp = new Date().getTime()
    if (config.params) {
      config.params.timeStamp = timeStamp
    } else {
      config.params = {
        timeStamp: timeStamp
      }
    }
  }
  return config
})

// axios 全局响应拦截器
request.interceptors.response.use(
  response => {
    hidenLoading()
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
