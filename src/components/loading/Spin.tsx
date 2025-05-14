import { Spin } from "antd"

export default function Loading({ tip = "Loading" }: { tip?: string }) {
  return (
    <Spin tip={tip} size='large' delay={100}>
      <div></div>
    </Spin>
  )
}
