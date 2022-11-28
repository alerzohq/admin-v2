import React from 'react'
import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../configs/access-control'
import { Path } from '../../../constants/route-path'
import { BusinessContainer } from '../../../container/dashboard'

const Businesses = () => {
  const { businessesAccess } = AllPermissions()
  if (!businessesAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }

  return <BusinessContainer />
}
 

export default Businesses
