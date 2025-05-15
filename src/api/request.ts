import axios from "axios"
import { showLoading, hidenLoading } from "@/components/loading/Loading"
import env from "@/config/env"
import type { ResponseData } from "@/types"
import { message } from "@/components/AntdGlobal"
import { GET_TOKEN, REMOVE_TOKEN } from "@/utils/storage"

// axios 全局配置
const request = axios.create({
  baseURL: "/api",
  timeout: 3000,
  timeoutErrorMessage: "请求超时，请稍后再试",
  withCredentials: false
})

// axios 全局请求拦截器
request.interceptors.request.use(config => {
  // loading效果
  if (config.showLoging) showLoading()

  // 加载运行时环境变量
  if (env.mock) {
    config.baseURL = env.mockApi
  } else {
    config.baseURL = env.baseApi
  }
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
  // 设置token
  let tokenStr = GET_TOKEN()
  if (tokenStr == null || tokenStr == "") {
    REMOVE_TOKEN()
  } else {
    config.headers.set("Authorization", tokenStr)
  }
  return config
})

// axios 全局响应拦截器
request.interceptors.response.use(
  response => {
    hidenLoading()
    const data: ResponseData = response.data
    if (data.code === 401 || data.code === 403) {
      message.warning("请重新登陆")
      REMOVE_TOKEN()
      return Promise.reject(data)
    }
    if (data.code == 400) {
      message.error("请求数据错误")
      return Promise.reject(data)
    }
    if (data.code == 404) {
      message.error("请求资源不存在")
      return Promise.reject(data)
    }
    if (data.code != 200) {
      message.error(data.msg)
      return Promise.reject(data)
    }
    return data.data
  },
  error => {
    hidenLoading()
    message.error(error.message)
    return Promise.reject(error)
  }
)

interface IConfig {
  showLoging?: boolean
  showError?: boolean
}

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return request.get(url, { params })
  },
  post<T>(url: string, params?: object, options: IConfig = { showLoging: true, showError: true }): Promise<T> {
    return request.post(url, params, options)
  }
}
