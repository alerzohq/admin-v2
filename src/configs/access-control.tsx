import { useAppContext } from '../context'
import { getStorageItem } from '../utils/session-storage'

const AllPermissions = () => {
  const {
    state: { user },
  } = useAppContext();

  const userInfo =getStorageItem('user'); 
  const adminAccess = userInfo?.data?.role==='Super Admin' || Boolean(user?.data?.role === 'Super Admin')

  return { adminAccess }
}

export default AllPermissions
