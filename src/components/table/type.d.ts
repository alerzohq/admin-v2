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

  onClick?: (item: {}) => void
}

export type PopupProps = {
  show?: boolean
}
