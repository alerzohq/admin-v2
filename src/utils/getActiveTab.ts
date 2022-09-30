const getActiveTab = (location: string | string[] | undefined) => {
  switch (true) {
    case location?.includes('dashboard'):
      return 'Dashboard'
    case location?.includes('bulk-disburse'):
      return 'Bulk Disburse'
    case location?.includes('users'):
      return 'Users'
    case location?.includes('history'):
      return 'History'
    case location?.includes('notification'):
      return 'Notification'
    case location?.includes('billers'):
      return 'Billers'
    case location?.includes('product'):
      return 'Product'
    case location?.includes('virtualAccount'):
      return 'Virtual account'
    case location?.includes('terminal'):
      return 'Terminal Mgt'
    case location?.includes('merchant'):
      return 'Merchant Mgt'
    case location?.includes('audit-trail'):
      return 'Audit Trail'
    case location?.includes('reconciliation'):
      return 'Reconciliation'
    case location?.includes('roles-permissions'):
      return 'Roles & Permissions'
    case location?.includes('warehouse'):
      return 'Warehouse Mgt'
    default:
      return 'Dashboard'
  }
}

export default getActiveTab
