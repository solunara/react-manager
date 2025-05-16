import React from "react"
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"
import { Layout, Menu, theme, Watermark } from "antd"
import NavHeader from "@/components/navHeader"
import NavFooter from "@/components/navFooter"

const { Header, Content, Footer, Sider } = Layout

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`
}))

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <Watermark content='watermark'>
      <Layout>
        <Sider
          breakpoint='lg'
          collapsedWidth='0'
          onBreakpoint={broken => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
        >
          侧边栏
        </Sider>
        <Layout>
          <NavHeader />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG
              }}
            >
              content
            </div>
          </Content>
          <NavFooter />
        </Layout>
      </Layout>
    </Watermark>
  )
}

export default App
