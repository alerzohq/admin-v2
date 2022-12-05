import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../../configs/access-control'
import { Path } from '../../../../constants/route-path'
import { ProductDetailsContainer } from '../../../../container/dashboard'

const ProductDetails = () => {
  const { productDetilAccess } = AllPermissions()

  if (!productDetilAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }
  return <ProductDetailsContainer />
}

export default ProductDetails
