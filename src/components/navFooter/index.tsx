import styles from "./index.module.less"

const NavFooter = () => {
  return (
    <div className={styles.navfooter}>
      <div>
        <a href='https://github.com/solunara' target='_blank' rel='noreferrer'>
          作者主页
        </a>
        <span className='gutter'>|</span>
        <a href='javascript:void' rel='noreferrer'>
          React18+TS开发
        </a>
        <span className='gutter'>|</span>
        <a href='javascript:void' rel='noreferrer'>
          Vue3+TS开发
        </a>
      </div>
      <div>Copyright ©2025 React18通用后台 All Rights Reserved.</div>
    </div>
  )
}
export default NavFooter
