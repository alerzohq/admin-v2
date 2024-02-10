import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../../configs/access-control'
import { Path } from '../../../../constants/route-path'
import { EmployeeDetailsContainer } from '../../../../container/dashboard'

const UsersDetails = () => {
  const { roleDetailAccess } = AllPermissions()
  if (!roleDetailAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }
  return <EmployeeDetailsContainer />
}

export default UsersDetails
