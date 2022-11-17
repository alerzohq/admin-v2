import { formatDate } from '../utils/formatValue'

export const TABS = [
  {
    label: 'Customer Details',
    value: 'details',
    title: 'Customer Information',
  },
  {
    label: 'Transaction History',
    value: 'transHistory',
  },
  // { label: 'Cards', value: 'cards', title: '' },
  { label: 'Bank Accounts', value: 'bankAccounts', title: '' },
  // {
  //   label: 'Expenses Lens',
  //   value: 'expensesLens',
  //   title: 'Smart Spend History',
  // },
  // { label: 'Smart Spend', value: 'smartSpend', title: '' },
]

export const CUSTOMERTABLE = [
  { label: 'Customer Name', value: 'name', columnWidth: 'small' },
  { label: 'Phone Number', value: 'phoneNumber', columnWidth: 'small' },
  { label: 'BVN', value: 'bvnStatus', columnWidth: 'small' },
  { label: 'Date Registered', value: 'date', columnWidth: 'small' },
  { label: 'Email Address', value: 'email', columnWidth: 'large' },
]
export const SECURITYTABLE = [
  { label: 'Security Questions', value: 'status', columnWidth: 'small' },
  { label: 'noVisibility', value: 'empty', columnWidth: 'extraLarge' },
]
export const CUSTOMERSEGMENTTABLE = [
  { label: 'Customer Segment', value: 'customerSegment', columnWidth: 'small' },
  { label: 'Gender', value: 'gender', columnWidth: 'small' },
  { label: 'Passcode', value: 'passcodeStatus', columnWidth: 'small' },
  { label: 'KYC Level', value: 'kyc', columnWidth: 'small' },
  { label: 'Transaction PIN', value: 'pinStatus', columnWidth: 'small' },
  { label: 'Status', value: 'status', columnWidth: 'large' },
]
export const customerHelper = (data: { [key: string]: any }) => {
  return [
    {
      spacing: false,
      header: CUSTOMERTABLE,
      data: {
        name: `${data?.first_name || ''} ${data?.last_name || ''}`,
        phoneNumber: data?.phone_number,
        bvnStatus:
          data?.bvn_set || data?.kyc_level > 1 ? 'Verified' : 'Not verified',
        date: data?.created_at
          ? formatDate(data?.created_at, 'YYYY-MM-DD HH:mm:ss')
          : '',
        email: data?.email,
      },
    },
    {
      spacing: false,
      header: CUSTOMERSEGMENTTABLE,
      data: {
        customerSegment: data?.customer_segment,
        gender: data?.gender,
        passcodeStatus: data?.passcode_set ? 'Set' : 'Not Set',

        kyc: data?.kyc_level.toString(),
        pinStatus: data?.transaction_pin_set ? 'Set' : 'Not Set',
        status: data?.disabled ? 'Inactive' : 'Active',
      },
    },

    {
      spacing: false,
      header: SECURITYTABLE,
      data: {
        status: data?.security_question_set ? 'Set' : 'Not Set',
      },
    },
  ]
}
