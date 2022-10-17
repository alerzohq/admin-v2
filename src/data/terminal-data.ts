import { formatDate } from '../utils/formatValue'

export const TABS = [
  { label: 'Terminal Details', value: 'details', title: 'Terminal Details' },
  { label: 'Merchant Details', value: 'merchant', title: 'Merchant Details' },
  { label: 'Terminal Status History', value: 'stats-history', title: '' },
  { label: 'Terminal Transaction History', value: 'trans-history', title: '' },
]

export const DETAILSTABLE = [
  { label: 'Terminal ID', value: 'tid', columnWidth: 'small' },
  { label: 'Terminal Serial No', value: 'serialNumber', columnWidth: 'small' },
  { label: 'Variant', value: 'variant', columnWidth: 'small' },
  { label: 'Status', value: 'status', columnWidth: 'small' },
  { label: 'Date Updated', value: 'updatedAt', columnWidth: 'small' },
  { label: 'Date Created', value: 'createdAt', columnWidth: 'large' },
]

export const OTHERDETAILSTABLE = [
  { label: 'Terminal Model', value: 'model', columnWidth: 'small' },
  { label: 'noVisibility', value: 'empty', columnWidth: 'extraLarge' },
]

export const MERCHANTDETAILSTABLE = [
  { label: 'Merchant  ID', value: 'mid', columnWidth: 'small' },
  { label: 'Merchant Name', value: 'merchantName', columnWidth: 'small' },
  { label: 'Phone', value: 'phone', columnWidth: 'small' },
  { label: 'Status', value: 'status', columnWidth: 'small' },
  { label: 'Date Updated', value: 'updatedAt', columnWidth: 'small' },
  { label: 'Email Address', value: 'email', columnWidth: 'large' },
]
export const MERCHANTBUSINESSTABLE = [
  { label: 'Business Name', value: 'businessName', columnWidth: 'small' },
  { label: 'Location', value: 'location', columnWidth: 'small' },
  { label: 'Transaction PIN', value: 'pinStatus', columnWidth: 'small' },
  { label: 'Passscode', value: 'passcodeStatus', columnWidth: 'small' },
  { label: 'BVN', value: 'bvnStatus', columnWidth: 'small' },
  { label: 'Business Address', value: 'businessAddress', columnWidth: 'large' },
]
export const MERCHANTCUSTOMERTABLE = [
  { label: 'Customer Segment', value: 'customerSegment', columnWidth: 'small' },
  { label: 'Gender', value: 'gender', columnWidth: 'large' },
]

export const merchant = {
  status: true,
  message: 'Fetched terminals',
  data: [
    {
      mid: '2ALZ1816',
      merchantName: '00052001043',
      phone: '08051243854',
      status: 'disabled',
      createdAt: '2022-09-14T08:42:08.234Z',
      updatedAt: '2022-09-14T08:42:08.234Z',

      terminalSpecificationId: 'e2025982-a6e2-470b-9c63-1be84dab5614',
      model: 'A75',
      accountNumber: '0805661234',
      accountName: 'Jonathan Lewis',
      references: '001043',
      sessionId: '2025982',
      variant: 'POS',
    },
  ],
}
export const terminalHelper = (data: any) => {
  console.log(data, 'rool')
  return [
    {
      spacing: false,
      header: DETAILSTABLE,
      data: {
        tid: data?.tid,
        serialNumber: data?.serial_number,
        status:
          data?.user_id === null
            ? 'Unassigned'
            : data?.active
            ? 'Active'
            : 'Inactive',
        variant: data?.model,
        updatedAt: data?.updated_at
          ? formatDate(data?.updated_at, 'YYYY-MM-DD HH:mm:ss')
          : '',
        createdAt: data?.created_at
          ? formatDate(data?.created_at, 'YYYY-MM-DD HH:mm:ss')
          : '',
      },
    },
    {
      spacing: false,
      header: OTHERDETAILSTABLE,
      data: {
        model: data?.variant,
        empty: '',
      },
    },
  ]
}

export const merchantHelper = (data: any) => {
  return [
    {
      spacing: false,
      header: MERCHANTDETAILSTABLE,
      data: {
        mid: data?.merchant?.mid,
        merchantName: data?.merchant?.merchantName,
        phone: data?.merchant?.phone,
        status: data?.merchant?.status,
        updatedAt: data?.updatedAt
          ? formatDate(data?.updatedAt, 'YYYY-MM-DD HH:mm:ss')
          : '',
        email: data?.merchant?.email,
      },
    },
    {
      spacing: false,
      header: MERCHANTBUSINESSTABLE,
      data: {
        businessName: data?.merchant?.business?.businessName,
        location: data?.merchant?.business?.location,
        pinStatus: data?.merchant?.business?.pin,
        passcodeStatus: data?.merchant?.business?.passcode,
        bvnStatus: data?.merchant?.business?.bvn,
        businessAddress: data?.merchant?.business?.businessName,
      },
    },
    {
      spacing: false,
      header: MERCHANTCUSTOMERTABLE,
      data: {
        customerSegment: data?.merchant?.customer?.customerSegment,
        gender: data?.merchant?.customer?.gender,
      },
    },
  ]
}
