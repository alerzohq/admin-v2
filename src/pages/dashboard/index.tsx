import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components'
import Content from '../../components/dashboard-contents'

const Dashboard: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const collapseBar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      <Sidebar isCollapsed={isCollapsed} collapseBar={collapseBar} />
      <Content isCollapsed={isCollapsed}>
        <Outlet />
      </Content>
    </>
  )
}

export default Dashboard
