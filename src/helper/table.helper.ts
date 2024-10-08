import {
  amountHelper,
  formatDate,
  generateCommission,
} from '../utils/formatValue'

type TableHelperProps = {
  item: { [key: string]: any } | null
  name?: string
}

export const transformData = ({ item, name }: TableHelperProps) => {
  //Transactions Table Data
  if (item && name === 'transaction') {
    const {
      reference,
      amount,
      recipient,
      customer_name,
      type,
      action,
      status,
      biller,
      created_at,
    } = item
    let displayName = biller?.display_name || ''
    let destination = recipient ? recipient : ''
    return {
      reference,
      customer_name,
      destination,
      amount,
      type,
      action,
      displayName,
      status,
      created_at,
    }
  }

  //Transaction History  Table Data

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

  //Business TransactionTable Data

  if (item && name === 'business-transactions') {
    const { reference, amount, type, action, status, biller, created_at } = item
    let displayName = biller?.display_name || ''
    return { reference, amount, type, action, displayName, status, created_at }
  }

  //Business Table Data

  if (item && name === 'business') {
    const {
      name,
      business_owner,
      phone_number,
      kyc_level,
      created_at,
      is_live,
    } = item
    let phoneNumber = phone_number || ''
    let email = business_owner?.email || ''
    let status = is_live ? 'Active' : 'Inactive'
    return { name, phoneNumber, email, kyc_level, status, created_at }
  }

  //User Roles Permission Table Data

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

  //Employees Table Data

  if (item && name === 'employees') {
    const { firstName, lastName, phoneNumber, email, adminRoleName, disabled } =
      item
    let statusVal = disabled ? 'Inactive' : 'Active'
    return {
      name: `${firstName} ${lastName}`,
      email: email.toLowerCase(),
      phoneNumber,
      adminRoleName,
      statusVal,
    }
  }

  //Products Table Data

  if (item && name === 'products') {
    const { displayName, fallbackBillerSlug, billerSlug, disabled } = item

    let status = disabled ? 'Inactive' : 'Active'

    return { name: displayName, biller: billerSlug, status, fallbackBillerSlug }
  }

  //Product Billers Table Data

  if (item && name === 'product-billers') {
    const { displayName, commission, createdAt } = item
    const type = commission?.rate?.type
    const percentage = commission?.rate?.percentage
    const cap = commission?.splits?.[0]?.rate?.amount || 0
    const rates = generateCommission(type, percentage, cap)
    return { displayName, rates, createdAt }
  }

  //Billers Table Data

  if (item && name === 'billers') {
    const {
      display_name,
      phone_number,
      email,
      disabled,
      created_at,
      updated_at,
    } = item

    const billerStatus = disabled === true ? 'Inactive' : 'Active'
    const createdDate = formatDate(created_at, 'YYYY-MM-DD HH:mm:ss')
    const updatedDate = updated_at
      ? formatDate(updated_at, 'YYYY-MM-DD HH:mm:ss')
      : ''
    const phoneNumber = phone_number ?? 'N/A'
    const emailAddress = email ?? 'N/A'

    return {
      display_name,
      emailAddress,
      phoneNumber,
      billerStatus,
      createdDate,
      updatedDate,
    }
  }

  //Billers Products Table Data

  if (item && name === 'biller-products') {
    const { product_name, rate, splits, disabled } = item
    const status = disabled === true ? 'Inactive' : 'Active'
    const type = rate?.type || ''
    const percentage = generateCommission(
      type,
      rate?.amount || rate?.percentage,
      rate?.cap
    )
    const merchantRate = generateCommission(
      type,
      splits?.[0]?.rate?.amount || splits?.[0]?.rate?.percentage,
      splits?.[0]?.rate?.cap
    )

    return { product_name, type, percentage, merchantRate, status }
  }

  //Business Products Table Data

  if (item && name === 'business-products') {
    const { commissionRates, createdAt, adminDisabled } = item

    const type = commissionRates?.[0]?.rate?.type
    const percentage = commissionRates?.[0]?.rate?.percentage
    const flat = commissionRates?.[0]?.rate?.amount
    const cap = commissionRates?.[0]?.rate?.cap
    const rates = generateCommission(
      type,
      type === 'percentage' ? percentage : flat,
      cap
    )
    let status = adminDisabled ? 'Inactive' : 'Active'
    const displayName = item?.product?.displayName

    return { displayName, type, rates, status, createdAt }
  }

  //Exist Terminal Table Data

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

  //Business Terminal Table Data

  if (item && name === 'business-terminals') {
    const { serial_number, tid, variant, model, active, created_at } = item
    const statusVal = active ? 'Active' : 'Inactive'
    const createdDate = formatDate(created_at, 'YYYY-MM-DD HH:mm:ss')
    return { tid, serial_number, variant, model, statusVal, createdDate }
  }

  //Audit Table Data

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

  //Business Members Table Data

  if (item && name === 'business-members') {
    let { first_name, last_name, email, active, created_at } = item
    let status = active ? 'Active' : 'Inactive'
    return { username: `${first_name} ${last_name}`, email, status, created_at }
  }

  //Request Terminal Table Data

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

  //Invites Table Data

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

  //KYC Table Data

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
