import { amountHelper, formatDate } from '../utils/formatValue'

export const TABS = [
  { label: 'Business Details', value: 'details', title: 'Business Details' },
  { label: 'Transaction History', value: 'transaction', title: '' },
  { label: 'Members', value: 'members', title: '' },
  { label: 'Products', value: 'products', title: '' },
  // { label: 'KYC Documents', value: 'kyc', title: '' },
  { label: 'Terminals', value: 'terminals', title: '' },
  { label: 'Bank Accounts', value: 'accounts', title: '' },
]

export const DETAILSTABLE = [
  { label: 'Business ID', value: 'id', columnWidth: 'small' },
  { label: 'Business Name', value: 'name', columnWidth: 'small' },
  { label: 'Phone Number', value: 'phone_number', columnWidth: 'small' },
  { label: 'Location', value: 'state', columnWidth: 'small' },
  { label: 'Date Registered', value: 'createdAt', columnWidth: 'small' },
  { label: 'Email Address', value: 'email', columnWidth: 'large' },
]

export const ADDRESSTABLE = [
  { label: 'Main balance', value: 'balance', columnWidth: 'small' },
  { label: 'Commission', value: 'commission', columnWidth: 'small' },
  { label: 'Business Address', value: 'address', columnWidth: 'small' },
  { label: 'noVisibility', value: 'empty', columnWidth: 'small' },
  { label: 'noVisibility', value: 'empty', columnWidth: 'small' },
  { label: 'noVisibility', value: 'empty', columnWidth: 'large' },
]

export const OWNERTABLE = [
  { label: 'Name', value: 'ownerName', columnWidth: 'small' },
  { label: 'Phone Number', value: 'ownerPhone', columnWidth: 'small' },
  { label: 'KYC Level', value: 'kyc', columnWidth: 'small' },
  { label: 'BVN', value: 'bvn', columnWidth: 'small' },
  { label: 'Date Registered', value: 'createdAt', columnWidth: 'small' },
  { label: 'Email Address', value: 'ownerEmail', columnWidth: 'large' },
]
export const PASSCODETABLE = [
  { label: 'Transaction PIN', value: 'pinStatus', columnWidth: 'small' },
  { label: 'Gender', value: 'gender', columnWidth: 'small' },
  { label: 'Passcode', value: 'passcodeStatus', columnWidth: 'small' },
  { label: 'noVisibility', value: 'empty', columnWidth: 'small' },
  { label: 'noVisibility', value: 'empty', columnWidth: 'small' },
  { label: 'noVisibility', value: 'empty', columnWidth: 'large' },
]

export const businessDetailsHelper = (data: any) => {
  let commision = data?.wallet_details?.find(
    (wallet: { [key: string]: any }) => wallet?.wallet_type === 'commission'
  )
  let main = data?.wallet_details?.find(
    (wallet: { [key: string]: any }) => wallet?.wallet_type === 'main'
  )

  return [
    {
      spacing: false,
      header: DETAILSTABLE,
      data: {
        id: data?.id,
        name: data?.name,
        phone_number: data?.phone_number,
        state: data?.state,
        createdAt: data?.created_at
          ? formatDate(data?.created_at, 'YYYY-MM-DD HH:mm:ss')
          : '',

        email: data?.business_owner?.email,
      },
    },
    {
      spacing: false,
      header: ADDRESSTABLE,
      data: {
        address: data?.address,
        balance: amountHelper(main?.wallet_balance),
        commission: amountHelper(commision?.wallet_balance),
        empty: '',
      },
    },
    {
      title: 'Business Owner  Details',
      spacing: false,
      header: OWNERTABLE,
      data: {
        ownerName:
          `${data?.business_owner?.first_name} ${data?.business_owner?.last_name}` ||
          '',
        ownerPhone: data?.business_owner?.phone_number,
        kyc: data?.kyc_level.toString(),
        bvn: data?.bvn,
        createdAt: data?.business_owner?.created_at
          ? formatDate(data?.created_at, 'YYYY-MM-DD HH:mm:ss')
          : '',

        ownerEmail: data?.business_owner?.email,
      },
    },
    {
      spacing: false,
      header: PASSCODETABLE,
      data: {
        pinStatus: data?.business_owner.transaction_pin ? 'Set' : 'Not Set',
        gender: data?.business_owner?.gender,
        passcodeStatus: data?.business_owner.passcode ? 'Set' : 'Not Set',
        empty: '',
      },
    },
  ]
}

export const actionOptions = [
    {
      label: 'Reset Security Question',
      value: 'Reset Security Question',
    },
  ].filter(Boolean)