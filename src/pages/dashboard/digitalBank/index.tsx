import React from 'react'
import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../configs/access-control'
import { Path } from '../../../constants/route-path'
import DigitalBankContainer from '../../../container/dashboard/digitalBank'

const DigitalBankHome = () => {
  const { customersAccess } = AllPermissions()

  if (!customersAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }

  return <DigitalBankContainer />
}

export default DigitalBankHome
