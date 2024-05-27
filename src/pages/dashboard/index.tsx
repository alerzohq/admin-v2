import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { CBNPolicy, Sidebar} from '../../components'
import Content from '../../components/dashboard-contents'
import SessionTimeout from '../../configs/session-timeout'

const Dashboard: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <>
      <Sidebar
        isCollapsed={isCollapsed}
        onMouseEnter={() => setIsCollapsed(false)}
        onMouseLeave={() => setIsCollapsed(true)}
      />
      <Content isCollapsed={isCollapsed}>
        <SessionTimeout>
          <Outlet />
          <CBNPolicy/>
        </SessionTimeout>
      </Content>
    </>
  )
}

export default Dashboard
