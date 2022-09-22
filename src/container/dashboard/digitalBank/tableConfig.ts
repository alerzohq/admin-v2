import moment, { MomentInput } from 'moment'

//TO DO REMOVE ANY TYPE
export const digitalBankTableMapper = [
  {
    title: 'full name',
    key: 'name',
    render: (data: { [x: string]: any }) =>
      `${data['first_name']} ${data['last_name']}`,
    className: 'tableLink',
  },
  {
    title: 'phone number',
    key: 'phone_number',
  },
  {
    title: 'Email Address',
    key: 'email',
  },
  {
    title: 'KYC Level',
    key: 'kyc_level',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Date Registered',
    key: 'created_at',
    render: (data: { createdAt: MomentInput }) =>
      moment(data.createdAt).format('YYYY-MM-DD'),
  },
]
