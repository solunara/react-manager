import request from "@/api/request"
import { useEffect } from "react"

export default function Welcome() {
  useEffect(() => {
    request.get("http://192.168.110.208:8080/xyt/user/phone/codes")
  })
  return <div>Welcome</div>
}
