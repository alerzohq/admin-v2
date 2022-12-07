import React from 'react'
import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../configs/access-control'
import { Path } from '../../../constants/route-path'
import TerminalsContainer from '../../../container/dashboard/terminals'

const Terminals = () => {
  const { terminalAccess } = AllPermissions()

  if (!terminalAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }
  return <TerminalsContainer />
}

export default Terminals
