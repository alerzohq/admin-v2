import React from 'react'

export type FlexTableProps = {
  children: React.ReactNode
}
export type BasicData = {
  amount: string
}
export type TransactionData = {
  name?: string
  type?: string
  balance?: string
  summary?: string
  sessionId?: string
  displayName?: string
  channel?: string
  product?: string
  package?: string
  reference?: string
  userId?: string
  customerId?: string
  customerName?: string
  phoneNumber?: string
  dob?: string
  email?: string
  segment?: string
  customerType?: string
  kyc?: string
  status?: string
  customer?: string
  cardNumber?: string
  bouquet?: string
  billers?: string
  meterNumber?: string
  disco?: string
  address?: string
  token?: string
  accountNumber?: string
  billers?: string
  bundleName?: string
  channel?: string
  product?: string
  biller?: string
  bundle: string
}

export type TerminalData = {
  model?: string
  accountNumber?: string
  accountName?: string
  references?: string
  date?: string
  sessionId?: string
  tid?: string
  serialNumber?: string
  updatedAt?: string
  createdAt?: string
  mid?: string
  merchantName?: string
  phone?: string
  status?: string
  updatedAt?: string
  email?: string
  businessName?: string
  location?: string
  pinStatus?: string
  passcodeStatus?: string
  bvnStatus?: string
  businessAddress?: string
  customerSegment?: string
  gender?: string
}
export type BusinessData = {
  address?: string
  empty?: string
  id?: string
  name?: string
  phone_number?: string
  state?: string
  createdAt?: string
  email?: string
  ownerName?: string
  ownerPhone?: string
  kyc?: string
  bvn?: string
  createdAt?: string
  ownerEmail?: string
  kyc: string
  bvn: string
  createdAt: string
  empty: string
}

export type HeaderData = {
  label: string
  value: keyof typeof TransactionData
  columnWidth?: string
}

type Audit = {
  User: string
  Role: string
  SessionStartedAt: string
  SessionEndedAt: string
}
export type classesKeys =
  | keyof TransactionData
  | keyof TerminalData
  | keyof BusinessData
  | keyof BasicData
  | keyof Audit
interface classNameI {
  class: string
}
export type FlexTableRowProps = {
  children?: string | React.Node
  flex?: string
  topLeftRadius?: string
  topRightRadius?: string
  bottomLeftRadius?: string
  bottomRightRadius?: string
  selfAlign?: string
  bgTopColor?: string
  data: TransactionData | TerminalData | BusinessData | BasicData | Audit
  header: HeaderData[]
  bgBottomColor?: string
  clickable?: { [key: string]: any }
  setFetch?: Dispatch<SetStateAction<boolean>>
  shouldFetch?: boolean
  classes?: Partial<Record<classesKeys, classNameI>>
}
