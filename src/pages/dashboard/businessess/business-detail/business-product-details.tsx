import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../../configs/access-control'
import { Path } from '../../../../constants/route-path'
import BusinessProductDetailsContainer from '../../../../container/dashboard/businesses/details/products/product-details'

const BusinessProductDetails = () => {
  const { businessProductDetailAccess } = AllPermissions()

  if (!businessProductDetailAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }
  return <BusinessProductDetailsContainer />
}

export default BusinessProductDetails