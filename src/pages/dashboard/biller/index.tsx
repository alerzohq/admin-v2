import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../configs/access-control'
import { Path } from '../../../constants/route-path'
import { BillerContainer } from '../../../container/dashboard'

const Biller = () => {
  const { viewBillersAccess } = AllPermissions()
  if (!viewBillersAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }

  return <BillerContainer />
}

export default Biller
