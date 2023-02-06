import {
  ActiveTerminalsIcon,
  DefectiveTerminalsIcon,
  InactiveTerminalsIcon,
  TerminalsRequestsIcon,
  UnassignedTerminalsIcon,
} from '../assets/icons'
import TerminalsPendingRequestsIcon from '../assets/icons/pending-terminals-requests'
import { formatDate } from '../utils/formatValue'

export const TABS = [
  { label: 'Terminal Details', value: 'details', title: 'Terminal Details' },
  { label: 'Business Details', value: 'merchant', title: 'Business Details' },
  // { label: 'Terminal Status History', value: 'stats-history', title: '' },
  { label: 'Terminal Transaction History', value: 'trans-history', title: '' },
  {
    label: 'Terminal Log History',
    value: 'log-history',
    title: 'Terminal Log History',
  },
]
export const TERMINALTABS = [
  { label: 'Existing Terminals', value: 'existing', title: '' },
  { label: 'Terminal Requests', value: 'requests', title: '' },
]
export const TERMINALREQUESTTABS = [
  { label: 'Request Details', value: 'details', title: 'Request Details' },
  {
    label: 'Terminal Order Process',
    value: 'order-process',
    title: 'Terminal Order Process',
  },
]
export const TERMINALREQMERCHANTTABLE = [
  { label: 'Business ID', value: 'id', columnWidth: 'small' },
  { label: 'Business Name', value: 'name', columnWidth: 'small' },
  { label: 'Business Address', value: 'address', columnWidth: 'small' },
  { label: 'Phone Number', value: 'phone', columnWidth: 'small' },
  { label: 'Date Registered', value: 'date', columnWidth: 'large' },
  { label: 'Email Address', value: 'email', columnWidth: 'large' },
]
export const TERMINALREQDETAILTABLE = [
  { label: 'Request ID', value: 'requestId', columnWidth: 'small' },
  { label: 'Status', value: 'status', columnWidth: 'small' },
  { label: 'Request Date', value: 'date', columnWidth: 'small' },
  { label: 'Location', value: 'location', columnWidth: 'small' },
  {
    label: 'Delivery Location',
    value: 'deliveryLocation',
    columnWidth: 'large',
  },
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
  { label: 'Business Name', value: 'businessName', columnWidth: 'small' },
  { label: 'Location', value: 'location', columnWidth: 'small' },
  { label: 'Transaction PIN', value: 'pinStatus', columnWidth: 'small' },
  { label: 'Passcode', value: 'passcodeStatus', columnWidth: 'small' },
  { label: 'BVN', value: 'BVNStatus', columnWidth: 'small' },
  { label: 'Business Adress', value: 'businessAdress', columnWidth: 'large' },
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
  return [
    {
      spacing: false,
      header: DETAILSTABLE,
      data: {
        tid: data?.tid,
        serialNumber: data?.serial_number,
        status: data?.active ? 'Enabled' : 'Disabled',
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
        // mid: data?.business_owner?.id,
        businessName: data?.name,
        location: data?.city,
        pinStatus: data?.business_owner?.transaction_pin ? 'Set' : 'Not set',
        passcodeStatus: data?.business_owner?.passcode ? 'Set' : 'Not set',
        BVNStatus: data?.kyc_level > 1 ? 'Verified' : 'Not Verified',
        businessAdress: data?.address,
      },
    },
  ]
}

export const terminalLabels = {
  card1: 'Active Terminals',
  card2: 'Inactive Terminals',
  card3: 'Defective Terminals',
  card4: 'Unassigned Terminals',
}
export const terminalIcons = {
  card1: ActiveTerminalsIcon,
  card2: InactiveTerminalsIcon,
  card3: DefectiveTerminalsIcon,
  card4: UnassignedTerminalsIcon,
}

export const terminalStats = (Statistics: { [key: string]: any }) => {
  const statistics = {
    card1: Statistics?.activeTerminals,
    card2: Statistics?.inactiveTerminals,
    card3: Statistics?.defectiveTerminals,
    card4: Statistics?.unassignedTerminals,
  }
  return statistics
}

export const terminalsRequestsLabels = {
  card1: 'All Terminal Requests',
  card2: 'Rejected Terminal Requests',
  card3: 'Pending Terminal Requests',
  card4: 'Approved Terminal Requests',
}
export const requestTerminalIcons = {
  card1: TerminalsRequestsIcon,
  card2: InactiveTerminalsIcon,
  card3: TerminalsPendingRequestsIcon,
  card4: ActiveTerminalsIcon,
}
export const terminalRequestsStats = () => {
  const statistics = {
    card1: 10,
    card2: 10,
    card3: 10,
    card4: 10,
  }
  return statistics
}

export const terminalRequestHelper = (data: any) => {
  const business = data?.business
  const createdDate = data?.status[0]?.timestamp;
  return [
    {
      spacing: false,
      header: TERMINALREQMERCHANTTABLE,
      data: {
        id: business?.id,
        name: business?.name,
        address: business?.address,
        phone: business?.phoneNumber,
        date: formatDate(business?.createdAt, 'YYYY-MM-DD HH:mm:ss'),
        email: business?.email,
      },
    },
    {
      spacing: false,
      header: TERMINALREQDETAILTABLE,
      data: {
        requestId: data?.id,
        status: data?.status[data?.status?.length - 1]?.status,
        date: formatDate(createdDate, 'YYYY-MM-DD HH:mm:ss'),
        location: data?.data?.location,
        deliveryLocation: data?.data?.address,
      },
    },
  ]
}

export const TerminalProviders = [
  { label: 'GA', value: 'ga', },
  { label: '3line', value: '3line' },

]