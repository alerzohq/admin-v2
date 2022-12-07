import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../../configs/access-control'
import { Path } from '../../../../constants/route-path'
import { TransactionDetailContainer } from '../../../../container/dashboard'

const TransactionDetails = () => {
  const { historyAccess } = AllPermissions()
  if (!historyAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }
  return <TransactionDetailContainer />
}

export default TransactionDetails
