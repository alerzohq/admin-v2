import {
  amountHelper,
  formatDate,
  generateCommission,
} from '../utils/formatValue'

type props = {
  item: { [key: string]: any } | null
  name?: string
}

export const transformData = ({ item, name }: props) => {
  if (item && name === 'transaction') {
    const {
      reference,
      amount,
      channel,
      customer_name,
      type,
      action,
      status,
      biller,
      created_at,
    } = item
    let displayName = biller?.display_name || ''
    let actionChannel = channel ? channel?.toUpperCase() : ''
    return {
      reference,
      customer_name,
      actionChannel,
      amount,
      type,
      action,
      displayName,
      status,
      created_at,
    }
  }
  if (item && name === 'transaction-history') {
    const { reference, amount, type, action, status, biller, created_at } = item
    let displayName = biller?.display_name || ''
    return {
      reference,
      amount: amountHelper(amount),
      type,
      displayName,
      action,
      status,
      created_at,
    }
  }
  if (item && name === 'business-transactions') {
    const { reference, amount, type, action, status, biller, created_at } = item
    let displayName = biller?.display_name || ''
    return { reference, amount, type, action, displayName, status, created_at }
  }
  if (item && name === 'business') {
    const { name, business_owner, kyc_level, created_at, is_live } = item
    let phoneNumber = business_owner?.phone_number || ''
    let email = business_owner?.email || ''
    let status = is_live ? 'Active' : 'Inactive'
    return { name, phoneNumber, email, kyc_level, status, created_at }
  }
  if (item && name === 'user-roles-permission') {
    const { name, permissions, numberOfMembers } = item
    let perm = permissions || []
    return {
      name,
      permission: perm.length
        ? perm
            .map(
              (selectedPermission: { displayName: string }) =>
                selectedPermission.displayName
            )
            .join(', ')
        : '-',
      numberOfMembers,
    }
  }
  if (item && name === 'employees') {
    const { firstName, lastName, phoneNumber, email, roleName, disabled } = item
    let statusVal = disabled ? 'Inactive' : 'Active'
    return {
      name: `${firstName} ${lastName}`,
      email: email.toLowerCase(),
      phoneNumber,
      roleName,
      statusVal,
    }
  }
  if (item && name === 'products') {
    const { displayName, fallbackBillerSlug, billerSlug } = item

    return { name: displayName, biller: billerSlug, fallbackBillerSlug }
  }
  if (item && name === 'product-billers') {
    const { displayName, commission, createdAt } = item
    const type = commission?.rate?.type
    const percentage = commission?.rate?.percentage
    const cap = commission?.splits[0]?.rate.amount
    const rates = generateCommission(type, percentage, cap)
    return { displayName, rates, createdAt }
  }

  if (item && name === 'business-products') {
    const { displayName, commission, createdAt, disabled } = item
    const type = commission?.rate?.type
    const percentage = commission?.rate?.percentage
    const cap = commission?.splits[0]?.rate.amount
    const rates = generateCommission(type, percentage, cap)
    let status = disabled ? 'Inactive' : 'Active'
    return { displayName, type, rates, status, createdAt }
  }

  if (item && name === 'existTerminal') {
    const {
      serial_number,
      tid,
      model,
      active,
      created_at,
      updated_at,
      user_id,
    } = item
    const statusVal =
      user_id === null ? 'Unassigned' : active ? 'Active' : 'Inactive'
    const updatedDate = formatDate(created_at, 'YYYY-MM-DD HH:mm:ss')
    return { tid, serial_number, model, statusVal, updatedDate, updated_at }
  }
  if (item && name === 'business-terminals') {
    const { serial_number, tid, variant, model, active, created_at } = item
    const statusVal = active ? 'Active' : 'Inactive'
    const createdDate = formatDate(created_at, 'YYYY-MM-DD HH:mm:ss')
    return { tid, serial_number, variant, model, statusVal, createdDate }
  }
  if (item && name === 'audit') {
    let { admin, loginDate, logoutDate } = item
    loginDate = formatDate(loginDate, 'YYYY-MM-DD HH:mm:ss')
    logoutDate = logoutDate
      ? formatDate(logoutDate, 'YYYY-MM-DD HH:mm:ss')
      : 'Session ongoing'
    const role =
      admin.roleName.charAt(0).toUpperCase() + admin.roleName.slice(1)
    return {
      username: `${admin.firstName} ${admin.lastName}`,
      role,
      loginDate,
      logoutDate,
    }
  }
  if (item && name === 'business-members') {
    let { first_name, last_name, email, active, created_at } = item
    let status = active ? 'Active' : 'Inactive'
    return { username: `${first_name} ${last_name}`, email, status, created_at }
  }
  if (item && name === 'requestsTerrminals') {
    const { data, business, status } = item
    const statusVal = status[status.length - 1].status
    const updatedDate = formatDate(
      item?.status?.[0]?.timestamp,
      'YYYY-MM-DD HH:mm:ss'
    )
    return {
      businessId: business?.id,
      name: business.name,
      address: data.address,
      statusVal,
      updatedDate,
    }
  }
  if (item && name === 'invites') {
    const { email, adminRoleName, createdAt, expiresIn, accepted, id } = item
    const now = new Date()

    return {
      email: `${email.toLowerCase()}`,
      adminRoleName,
      createdAt: formatDate(createdAt, 'YYYY-MM-DD HH:mm:ss'),
      expired: new Date(expiresIn) < now && !accepted ? 'sendInvite' : '',
      id,
    }
  }
  if (item && name === 'KYC') {
    const { verificationId, fullName, channel, createdAt, status } = item

    return {
      verificationId,
      fullName,
      channel,
      createdAt: formatDate(createdAt, 'YYYY-MM-DD HH:mm:ss'),
      status,
    }
  }
}
