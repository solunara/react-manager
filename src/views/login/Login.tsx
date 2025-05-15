import styles from "./login.module.less"
import { Button, Form, Input, App } from "antd"
import api from "@/api"
import type { Login } from "@/types"
import { SET_TOKEN } from "@/utils/storage"

export default function LoginFn() {
  const antdApp = App.useApp()
  const onFinish = async (value: Login.params) => {
    const data = await api.login(value)
    SET_TOKEN(data.token)
    antdApp.message.success("登陆成功")
    const callbackUrl = new URLSearchParams(location.search)
    location.href = callbackUrl.get("callback") || "/welcome"
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <Form name='basic' initialValues={{ remember: true }} onFinish={onFinish} autoComplete='off'>
          <div className={styles.title}>系统登陆</div>
          <Form.Item name='username' rules={[{ required: true, message: "Please input your username!" }]}>
            <Input autoComplete='username' />
          </Form.Item>

          <Form.Item name='password' rules={[{ required: true, message: "Please input your password!" }]}>
            <Input.Password autoComplete='current-password' />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
