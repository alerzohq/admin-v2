import { useAppContext } from '../context'
import { getStorageItem } from '../utils/session-storage'

const AllPermissions = () => {
  const {
    state: { user },
  } = useAppContext();
  
  const userInfo = getStorageItem('user');
  

  console.log({userInfo})


  const isHasPermission =  userInfo?.data?.permissions.map((permission:{[key: string]: string}) => permission.slug)
  
  //Permissions
  const adminAccess = userInfo?.data?.role === 'Super Admin' ||Boolean(user?.data?.role === 'Super Admin')
  const businessesAccess =isHasPermission.includes('view_businesses')
  const customersAccess =   isHasPermission.includes('view_customers') || adminAccess
  const customerDetailAccess =   isHasPermission.includes('view_customer') || adminAccess
  const productBillersAccess =   isHasPermission.includes('view_product_billers') || adminAccess
  const productsAccess =   isHasPermission.includes('view_products') || adminAccess
  const rolesAccess =   isHasPermission.includes('view_roles') || adminAccess
  const terminalAccess =   isHasPermission.includes('view_terminals') || adminAccess
  const historyAccess =   isHasPermission.includes('view_transactions') || adminAccess

  




  return { adminAccess,businessesAccess,customersAccess,customerDetailAccess,historyAccess,productsAccess, productBillersAccess,rolesAccess,terminalAccess }
}

export default AllPermissions
