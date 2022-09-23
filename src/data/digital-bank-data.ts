import { formatDate } from "../utils/formatValue"

export const TABS = [
    { label: 'Customer Details', value: 'details', title: 'Customer Information' },
    { label: 'Transaction History', value: 'transHistory', title: 'Merchant Details' },
    { label: 'Cards', value: 'cards', title: '' },
    { label: 'Expenses Lens', value: 'expensesLens', title: 'Smart Spend History' },
    { label: 'Smart Spend', value: 'smartSpend', title: '' },
  ]

  export const CUSTOMERTABLE = [
    { label: 'Customer Name', value: 'name', columnWidth: 'small' },
    { label: 'Account Number', value: 'accountNumber', columnWidth: 'small' },
    { label: 'Phone Number', value: 'phoneNumber', columnWidth: 'small' },
    { label: 'BVN', value: 'bvn', columnWidth: 'small' },
    { label: 'Date Registered', value: 'date', columnWidth: 'small' },
    { label: 'Email Address', value: 'email', columnWidth: 'large' },
  ]
  
  export const CUSTOMERSEGMENTTABLE = [
    { label: 'Customer Segment', value: 'customerSegment', columnWidth: 'small' },
    { label: 'Gender', value: 'gender', columnWidth: 'small' },
    { label: 'Passcode', value: 'passcode', columnWidth: 'small' },
    { label: 'KYC Level', value: 'kyc', columnWidth: 'small' },
    { label: 'Transaction PIN', value: 'pin', columnWidth: 'small' },
    { label: 'Status', value: 'status', columnWidth: 'large' },
  ]
  export const customerHelper = (data: any) => {
    return [
      {
        spacing: false,
        header: CUSTOMERTABLE,
        data: {
          name: `${data?.first_name} ${data?.last_name}`,
          accountNumber: data?.account_numberr,
          phoneNumber: data?.phone_number,
          bvn : data?.bvn_set ? 'Set' : 'Not Set',
          date: data?.created_at
            ? formatDate(data?.created_at, 'YYYY-MM-DD HH:mm:ss')
            : '',
         email: data?.email
        },
      },
      {
        spacing: false,
        header: CUSTOMERSEGMENTTABLE,
        data: {
          customerSegment: data?.customer_segment,
          gender: data?.gender,
          kyc: data?.kyc_level,
          passcode: data?.passcode_set ? 'Set' : 'Not Set',
          pin: data?.transaction_pin_set ? 'Set' : 'Not Set',
          status: data?.disabled ? 'Inactive' : 'Active',
        },
      },
    ]
  }
  