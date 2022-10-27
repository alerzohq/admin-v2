import { Navigate, Outlet } from 'react-router-dom'
import { Path } from '../constants/route-path'

type routeTypes = {
  user: unknown
} & React.ComponentProps<'div'>

export const IsUserRedirect = ({ user }: routeTypes) => {
  return !user ? <Outlet /> : <Navigate to={Path.DASHBOARD} replace />
}

export const ProtectedRoutes = ({ user }: routeTypes) => {
  return user ? <Outlet /> : <Navigate to={Path.LOGIN} replace />
}
