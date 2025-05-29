import { Menu } from "antd"
import styles from "./index.module.less"
import { DesktopOutlined, SettingOutlined, TeamOutlined } from "@ant-design/icons"
import { Navigate, useNavigate } from "react-router-dom"

const NavMenu = () => {
  const navigate = useNavigate()
  const items = [
    {
      key: "1",
      label: "工作台",
      icon: <DesktopOutlined />
    },
    {
      key: "2",
      label: "系统管理",
      icon: <SettingOutlined />,
      children: [
        {
          key: "3",
          label: "用户管理",
          icon: <TeamOutlined />
        }
      ]
    }
  ]
  const goHome = () => {
    navigate("/welcome")
  }
  return (
    <div className={styles.navmenu}>
      <div className={styles.logo} onClick={goHome}>
        <img src='logo.png' alt='' className={styles.img} />
        <span>小明搬家</span>
      </div>
      <Menu theme='dark' defaultOpenKeys={["1"]} mode='inline' items={items} />
    </div>
  )
}
export default NavMenu
