import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../../configs/access-control'
import { Path } from '../../../../constants/route-path'
import Details from '../../../../container/dashboard/terminals/details'

const TerminalDetails = () => {
  const { adminAccess } = AllPermissions()

  if (!adminAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }

  return <Details />
}

export default TerminalDetails
