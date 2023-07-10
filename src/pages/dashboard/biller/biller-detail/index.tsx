import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../../configs/access-control'
import { Path } from '../../../../constants/route-path'
import { BillerDetailContainer } from '../../../../container/dashboard'

const BillerDetail = () => {
  const { businessDetailAccess } = AllPermissions()
  if (!businessDetailAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }

  return <BillerDetailContainer />
}

export default BillerDetail