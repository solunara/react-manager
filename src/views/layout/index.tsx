import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Layout, Watermark } from "antd"
import NavMenu from "@/components/navMenu"
import NavHeader from "@/components/navHeader"
import NavFooter from "@/components/navFooter"
import styles from "@/views/layout/index.module.less"
import api from "@/api/index"

const { Content, Sider } = Layout

const App: React.FC = () => {
  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const data = await api.getUserInfo()
    console.log(data)
  }
  return (
    <Watermark content='watermark'>
      <Layout>
        <Sider>
          <NavMenu />
        </Sider>
        <Layout>
          <NavHeader />
          <Content className={styles.content}>
            <div className={styles.wrapper}>
              <Outlet />
            </div>
            <NavFooter />
          </Content>
        </Layout>
      </Layout>
    </Watermark>
  )
}

export default App
