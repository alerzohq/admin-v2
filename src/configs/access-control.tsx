
import { useAppContext } from '../context';

const AllPermissions = () => {
    const {state: { user }} = useAppContext();
      const adminAccess=Boolean(user?.data?.role==="Super Admin")

      console.log({user})

  return {adminAccess}
}

export default AllPermissions