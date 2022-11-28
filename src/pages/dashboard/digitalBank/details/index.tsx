import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import AllPermissions from '../../../../configs/access-control';
import { Path } from '../../../../constants/route-path';
import DigitalBankDetailContainer from '../../../../container/dashboard/digitalBank/details'
import { unauthorizedMessage } from '../../../../utils/message';

const DigitalBankDetails = () => {

  const {customerDetailAccess } = AllPermissions(); 
   
    if (!customerDetailAccess) {
       toast.error(unauthorizedMessage)
      return <Navigate to={`/dashboard/${Path.DIGITALBANK}`} replace />
    }
  return <DigitalBankDetailContainer />
}

export default DigitalBankDetails
