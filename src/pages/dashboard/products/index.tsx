import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../configs/access-control'
import { Path } from '../../../constants/route-path'
import { ProductsContainer } from '../../../container/dashboard'

const Products = () => {
  const { productsAccess } = AllPermissions()

  if (!productsAccess) {
    return <Navigate to={`/${Path.DASHBOARD}`} replace />
  }
  return <ProductsContainer />
}

export default Products
