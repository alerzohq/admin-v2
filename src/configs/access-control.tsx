import { useAppContext } from '../context'

const AllPermissions = () => {
  const {
    state: { user },
  } = useAppContext()
  const adminAccess = Boolean(user?.data?.role === 'Super Admin')

  return { adminAccess }
}

export default AllPermissions
