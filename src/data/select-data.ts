export const options = [
  { value: 'successful', label: 'Successful' },
  { value: 'pending', label: 'Pending' },
  { value: 'failed', label: 'Failed' },
]

export const optionsAllPlatform = [
  // { value: 'web', label: 'Web' },
  // { value: 'pos', label: 'POS' },
  // { value: 'app', label: 'App' },
  // { value: 'api', label: 'API' },
  { label: 'Customer', value: 'customer' },
  { label: 'Business', value: 'business' },
  { label: 'Business User', value: 'business-user' },
  { label: 'Business Customer', value: 'business-customer' },
]
export const KYCOptions = [
  { value: 'rejected', label: 'Rejected' },
  { value: 'pending', label: 'Pending' },
  { value: 'approved', label: 'Approved' },
]

export const TerminalSelects = [
  {
    searchQuery: 'defective',
    placeholder: 'Health Status',
    values: [
      { label: 'Faulty', value: true },
      { label: 'Not Faulty', value: false },
    ],
    value: '',
  },
  {
    searchQuery: 'active',
    placeholder: 'Status',
    values: [
      { label: 'Active', value: true },
      { label: 'Inactive', value: false },
    ],
    value: '',
  },
]
