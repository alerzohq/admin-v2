import { Navigate } from 'react-router-dom';
import AllPermissions from '../../../../configs/access-control';
import { Path } from '../../../../constants/route-path';
import { BusinessDetailContainer } from '../../../../container/dashboard'

const BusinessDetails = () => {
  const {adminAccess} = AllPermissions();
  let obj={
    name:''
  }
  if(!adminAccess){
   return <Navigate to={`/${Path.DASHBOARD}`} replace/>
  }

  return <>
   <BusinessDetailContainer />
   {obj}
  </>
}

export default BusinessDetails
