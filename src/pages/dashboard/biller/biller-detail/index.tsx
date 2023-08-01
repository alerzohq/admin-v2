import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../../configs/access-control'
import { Path } from '../../../../constants/route-path'
import { BillerDetailContainer } from '../../../../container/dashboard'

const BillerDetail = () => {
  const { viewBillerDetailAccess } = AllPermissions()
  if (!viewBillerDetailAccess) {
    return <Navigate to={`/${Path.DASHBOARD}/${Path.BILLER}`} replace />
  }

  return <BillerDetailContainer />
}

export default BillerDetail