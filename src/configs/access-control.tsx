import { useAppContext } from '../context'
import { getStorageItem } from '../utils/session-storage'

const AllPermissions = () => {
  const {
    state: { user },
  } = useAppContext()

  const userInfo = getStorageItem('user')

  const isHasPermission = userInfo?.data?.permissions.map(
    (permission: { [key: string]: string }) => permission.slug
  )

  const adminAccess =
    userInfo?.data?.role === 'Super Admin' ||
    Boolean(user?.data?.role === 'Super Admin')

  const businessesAccess =
    isHasPermission.includes('view_businesses') || adminAccess
  const businessDetailAccess =
    isHasPermission.includes('view_business') || adminAccess
  const customersAccess =
    isHasPermission.includes('view_customers') || adminAccess
  const customerDetailAccess =
    isHasPermission.includes('view_customer') || adminAccess
  const productBillersAccess =
    isHasPermission.includes('view_product_billers') || adminAccess
  const productsAccess =
    isHasPermission.includes('view_products') || adminAccess
  const productDetilAccess =
    isHasPermission.includes('view_product') || adminAccess
  const rolesAccess = isHasPermission.includes('view_roles') || adminAccess
  const roleDetailAccess = isHasPermission.includes('view_role') || adminAccess
  const terminalAccess =
    isHasPermission.includes('view_terminals') || adminAccess
  const terminalDetailAccess =
    isHasPermission.includes('view_terminal') || adminAccess
  const createTerminalAccess =
    isHasPermission.includes('create_terminal') || adminAccess
  const historyAccess =
    isHasPermission.includes('view_transactions') || adminAccess
  const historyDetailAccess =
    isHasPermission.includes('view_transaction') || adminAccess
  const historyStatisticAccess =
    isHasPermission.includes('view_transaction_statistics') || adminAccess
  const historyDownloadAccess =
    isHasPermission.includes('download_transaction_report') || adminAccess
  const processReversals =
    isHasPermission.includes('process_reversals') || adminAccess
  const viewBillersAccess =
    isHasPermission.includes('view_billers') || adminAccess
  const setBillerThresholdAccess =
    isHasPermission.includes('set_biller_threshold') || adminAccess

  return {
    adminAccess,
    businessesAccess,
    businessDetailAccess,
    customersAccess,
    customerDetailAccess,
    historyAccess,
    historyDetailAccess,
    productsAccess,
    productDetilAccess,
    productBillersAccess,
    setBillerThresholdAccess,
    rolesAccess,
    roleDetailAccess,
    terminalAccess,
    terminalDetailAccess,
    processReversals,
    viewBillersAccess,
    historyDownloadAccess,
    createTerminalAccess,
    historyStatisticAccess,
  }
}

export default AllPermissions
