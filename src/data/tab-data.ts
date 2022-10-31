export const TABS = [
  {
    label: 'Transaction Details',
    value: 'details',
    title: 'Transaction Details',
  },
  { label: 'Other Information', value: 'other', title: 'Customer Details' },
  { label: 'Transaction Receipt', value: 'receipt', title: '' },
  { label: 'Staff Notes', value: 'notes', title: '' },
]
export const DETAILSTABLE = [
  { label: 'Name', value: 'customer_name', columnWidth: 'small' },
  { label: 'Type', value: 'type', columnWidth: 'small' },
  { label: 'Amount', value: 'amount', columnWidth: 'small' },
  { label: 'Balance', value: 'balance', columnWidth: 'small' },
  { label: 'Reference', value: 'reference', columnWidth: 'small' },
  { label: 'Biller', value: 'biller', columnWidth: 'large' },
]

export const CUSTOMERTABLE = [
  { label: 'Customer ID', value: 'customerId', columnWidth: 'small' },
  { label: 'Customer Name', value: 'customerName', columnWidth: 'small' },
  { label: 'PhoneNumber', value: 'phoneNumber', columnWidth: 'small' },
  { label: 'Date of birth', value: 'dob', columnWidth: 'small' },
  { label: 'Email Address', value: 'email', columnWidth: 'large' },
]
export const CUSTOMERMORETABLE = [
  { label: 'Segment', value: 'segment', columnWidth: 'small' },
  { label: 'Customer Type', value: 'customerType', columnWidth: 'small' },
  { label: 'KYC', value: 'kyc', columnWidth: 'small' },
  { label: 'Status', value: 'status', columnWidth: 'large' },
]
