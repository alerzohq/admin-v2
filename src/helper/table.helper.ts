import { amountHelper, formatDate, generateCommission } from '../utils/formatValue'

type props = {
  item: { [key: string]: any } | null
  name?: string
}

export const transformData = ({ item, name }: props) => {
  if (item && name === 'transaction') {
    const {
      reference,
      amount,
      customer_name,
      type,
      action,
      status,
      biller,
      created_at,
    } = item
    let displayName = biller?.display_name || ''
    return {
      reference,
      customer_name,
      amount,
      type,
      action,
      displayName,
      status,
      created_at,
    }
  }
  if (item && name === 'transaction-history') {
    const {
      reference,
      amount,
      type,
      action,
      status,
      biller,
      created_at,
    } = item
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
    let statusVal = disabled ? 'Active' : 'Inactive'
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
    const cap = commission?.rate?.cap
    const rates = generateCommission(type, percentage, cap)
    return { displayName, rates, createdAt }
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
  if (item && name === 'audit') {
    let { username, role, sessionStartedAt, sessionEndedAt } = item
    sessionStartedAt = formatDate(sessionStartedAt, 'YYYY-MM-DD HH:mm:ss')
    sessionEndedAt = formatDate(sessionEndedAt, 'YYYY-MM-DD HH:mm:ss')
    role = role.charAt(0).toUpperCase() + role.slice(1)
    return { username, role, sessionStartedAt, sessionEndedAt }
  }
}
