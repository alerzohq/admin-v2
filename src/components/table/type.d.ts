export type TableProps = {
  tableData: {}[]
  tableHeaders: string[]
  hideFilter?: boolean
  hideCheckInput?: boolean
  hideSort?: boolean
  tableName: string
  amountIndex?: number
  dateFormat?: string
  withSlug?: boolean
  hideActive?: boolean
  hideDate?: boolean
  headerbgColor?: string
  setParams?: boolean
  custom?: boolean
  notClickable?: boolean
  layout?: string
  routePath?: string
  noSlug?: boolean
  handleRouthPath?: (item?: { [key: string]: any }) => void
  handleAction?: (item: { [key: string]: any }) => void
  actionBtnLabel?: string
  onClick?: (item: {}) => void
}

export type PopupProps = {
  show?: boolean
}
