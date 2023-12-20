import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../../configs/access-control'
import { Path } from '../../../../constants/route-path'
import { UserDetailsContainer } from '../../../../container/dashboard'

const UsersDetails = () => {
  const { roleDetailAccess } = AllPermissions()
  if (!roleDetailAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }
  return <UserDetailsContainer />
}

export default UsersDetails
