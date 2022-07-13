import { Outlet } from 'react-router-dom'
// import styles from './index.module.less'
import './index.module.less'

const Layout = () => {
   return <section >
      <Outlet />
   </section>
}

export default Layout