import React from 'react'
import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../configs/access-control'
import { Path } from '../../../constants/route-path'
import { TransactionContainer } from '../../../container/dashboard'

const Transactions = () => {
  const {historyAccess } = AllPermissions()

  if (!historyAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }
  return <TransactionContainer />
}

export default Transactions
