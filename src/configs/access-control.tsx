
import { useAppContext } from '../context';

const AllPermissions = () => {
    const {
        state: { user }
      } = useAppContext();

  return {user}
}

export default AllPermissions