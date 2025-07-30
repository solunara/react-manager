import request from "@/api/request"
import { API_CONFIG } from "@/api/config"
import type { Login } from "@/types"

export default {
  // 用户登陆
  login(params: Login.params) {
    return request.post<Login.result>(API_CONFIG.UserLoginApi, params, { showLoging: true })
  },
  // 获取用户信息
  getUserInfo() {
    return request.get<any>(API_CONFIG.GetUserInfoApi, { showLoging: true })
  }
}
