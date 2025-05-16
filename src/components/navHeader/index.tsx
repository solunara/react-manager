import { MenuFoldOutlined } from "@ant-design/icons"
import { Breadcrumb, Switch, Dropdown } from "antd"
import type { MenuProps } from "antd"
import styles from "./index.module.less"

const NavHeader = () => {
  const breadList = [
    {
      title: "首页"
    },
    {
      title: "工作台"
    }
  ]
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "邮箱: 123@qq.com"
    },
    {
      key: "2",
      label: "退出"
    }
  ]

  return (
    <div className={styles.navheader}>
      <div className={styles.left}>
        <MenuFoldOutlined />
        <Breadcrumb items={breadList} style={{ marginLeft: 10 }} />
      </div>
      <div className='right'>
        <Switch checkedChildren='深色' unCheckedChildren='浅色' style={{ marginRight: 10 }} />
        <Dropdown className={styles.nickname} menu={{ items }} trigger={["click"]}>
          <span>Admin</span>
        </Dropdown>
      </div>
    </div>
  )
}
export default NavHeader
