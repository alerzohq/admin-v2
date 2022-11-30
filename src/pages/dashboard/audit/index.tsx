import React from 'react'
import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../configs/access-control'
import { Path } from '../../../constants/route-path'
import { AuditContainer } from '../../../container/dashboard'

const Audit = () => {
  const { adminAccess } = AllPermissions()

  if (!adminAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }

  return <AuditContainer />
}

export default Audit
