// 接口统一返回数据类型
export interface ResponseData<T = any> {
  code: number
  msg: string
  data: T
}

//
declare module "axios" {
  interface AxiosRequestConfig {
    showLoging?: boolean
    showError?: boolean
  }
}

// 登陆请求参数和返回数据类型
export namespace Login {
  export interface params {
    username: string
    password: string
  }
  export interface result {
    token: string
  }
}
