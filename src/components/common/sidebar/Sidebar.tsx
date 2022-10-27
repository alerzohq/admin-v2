import { useState, useEffect } from 'react'
import getActiveTab from '../../../utils/getActiveTab'
import signoutlogout from '../../../assets/images/pngs/signout-logout.png'
import styles from './sidenav.module.css'
import { useLocation } from 'react-router-dom'
import SideBarList from './SidebarData'
import { SubMenu } from './SubMenu'
// import { useAuthDispatch } from "../store/authProvider";

export const Sidebar: React.FC = () => {
  // const { onLogout } = useAuthDispatch();
  const { SidebarData } = SideBarList()
  const [activeTab, setActiveTab] = useState('Dashboard')

  const router = useLocation()
  let location = router.pathname

  useEffect(() => {
    let ActiveTab = getActiveTab(location)
    setActiveTab(ActiveTab)
  }, [location])

  return (
    <div className={styles.sidenav}>
      <div className={styles.navbarsectionTop}>
        {SidebarData?.filter((c) => c !== null)?.map((item, index) => {
          return (
            <SubMenu
              item={item}
              key={index}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          )
        })}
      </div>
      <div className={styles.navbarsectionBottom}>
        <div className={styles.navbarsection}>
          <div className={styles.notActive} id={styles.test}>
            <div className={styles.dash}>
              <img src={signoutlogout} alt="signout" height={20} width={20} />
              <h4 className={styles.sidenavHtext}>Logout</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
