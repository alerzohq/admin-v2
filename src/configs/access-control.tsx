
import { useAppContext } from '../context';

const AllPermissions = () => {
    const {state: { user }} = useAppContext();
      const adminAccess=Boolean(user?.data?.permissions?.[0]?.displayName==='Remove Admin')

  return {adminAccess}
}

export default AllPermissions