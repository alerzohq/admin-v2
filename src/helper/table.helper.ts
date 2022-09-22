type props = {
  item: { [key: string]: any } | null
  name?: string
}

export const transformData = ({ item, name }: props) => {
  if (item && name === 'transaction') {
    const { reference, amount, type, action, status, biller, created_at } = item
    let displayName = biller?.display_name || ''
    return { reference, amount, type, action, displayName, status, created_at }
  }

  if (item && name === 'business-transactions') {
    const { reference, amount, type, action, status, biller, created_at } = item
    let displayName = biller?.display_name || ''
    return { reference, amount, type, action, displayName, status, created_at }
  }
  if (item && name === 'business') {
    const { name, business_owner, kyc_level, created_at } = item
    let phoneNumber = business_owner?.phone_number || ''
    let email = business_owner?.email || ''
    let status = business_owner?.status ? 'Active' : 'Inactive'
    return { name, phoneNumber, email, kyc_level, status, created_at }
  }
}
