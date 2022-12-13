import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../../configs/access-control'
import { Path } from '../../../../constants/route-path'
import TerminalRequestDetails from '../../../../container/dashboard/terminals/details/request-detail'

const TerminalDetails = () => {
  const { adminAccess } = AllPermissions()

  if (!adminAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }

  return <TerminalRequestDetails />
}

export default TerminalDetails
