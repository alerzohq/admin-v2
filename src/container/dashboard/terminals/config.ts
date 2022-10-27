import moment, { MomentInput } from 'moment'

//TO DO REMOVE ANY TYPE
export const terminalsTableMapper = [
  {
    title: 'Id',
    key: 'id',
    render: (data: { id: any }) => data.id,
    className: 'tableLink',
  },
  {
    title: 'Serial number,',
    key: 'serialNumber',
  },
  {
    title: 'tid',
    key: 'tid',
  },
  {
    title: 'status',
    key: 'status',
    render: (data: { active: any }) => String(data.active),
  },
  {
    title: 'terminal spec no',
    key: 'terminalSpecificationId',
  },
  {
    title: 'date',
    key: 'createdAt',
    render: (data: { createdAt: MomentInput }) =>
      moment(data.createdAt).format('MM-DD-YYYY'),
  },
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
