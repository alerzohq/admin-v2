import React from 'react'

export type FlexTableProps = {
  children: React.ReactNode
}

export type TransactionData = {
  name: string
  amount: string
  type: string
  balance: string
  summary: string
}

export type BillerData = {
  sessionId?: string
  displayName: string
  channel: string
}
export type RecipientData = {
  name: string
  product: string
  package: string
  reference: string
  userId: string
}
export type CustomerData = {
  customerId: string
  customerName: string
  phoneNumber: string
  dob: string
  email: string
}
export type CustomerMoreData = {
  segment: string
  customerType: string
  kyc: string
  status: string
}
export type VASData = {
  customer: string
  type: string
  amount: string
  balance: string
  product: string
  reference: string
}
export type CableData = {
  cardNumber: string
  bouquet: string
  status: string
  billers: string
  channel: string
}
export type ElectricityData = {
  meterNumber: string
  disco: string
  status: string
  billers: string
  channel: string
  address: string
}
export type TokenData = {
  token: string
  phoneNumber: string
}
export type BettingData = {
  customerId: string
  billers: string
  status: string
  channel: string
}
export type InternetData = {
  accountNumber: string
  billers: string
  bundleName: string
  status: string
  channel: string
}
export type AirtimeData = {
  phoneNumber: string
  type: string
  amount: string
  balance: string
  product: string
  reference: string
}
export type AirtimeMoreData = {
  biller: string
  status: string
  channel: string
}
export type MobileData = {
  bundle: string
  biller: string
  status: string
  channel: string
}
export type TerminalMoreData = {
  model: string
  accountNumber: string
  accountName: string
  references: string
  date: string
  sessionId: string
}
export type TerminalData = {
  tid: string
  serialNumber: string
  amount: string
  status: string
  updatedAt: string
  createdAt: string
}

export type HeaderData = {
  label: string
  value: keyof typeof TransactionData
  columnWidth?: string
  columnWidth?: string
}

export type TableData = {
  spacing?: boolean
  currentValue?: boolean
  header: HeaderData[]
  data:
    | TransactionData
    | TerminalData
    | TerminalMoreData
    | BillerData
    | RecipientData
    | CustomerData
    | CustomerMoreData
    | VASData
    | CableData
    | ElectricityData
    | TokenData
    | BettingData
    | InternetData
    | AirtimeData
    | AirtimeMoreData
    | MobileData
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
  data:
    | TransactionData
    | TerminalMoreData
    | TerminalData
    | BillerData
    | RecipientData
    | CustomerData
    | CustomerMoreData
    | VASData
    | CableData
    | ElectricityData
    | TokenData
    | BettingData
    | InternetData
    | AirtimeData
    | AirtimeMoreData
    | MobileData
  header: HeaderData[]
  bgBottomColor?: string
}
// export type FlexTableRowProps = {
//     children?: string | React.Node;
//     flex?: string;
//     topLeftRadius?: string;
//     topRightRadius?:string;
//     bottomLeftRadius?: string;
//     bottomRightRadius?:string;
//     selfAlign?:string;
//     bgTopColor? :string;
// }
// export type FlexTableColumnProps = {
//     width?: string;
//     flex?: string;
//     rbColor?: string;
//     bgColor?: string;
//     bgTopColor?: string;
//     bgBottomColor: string;
//     children?: string | React.Node;

//     topText?: string;
//     bottomText: string;
// }
