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
  headerbgColor?: string

  onClick?: (item: {}) => void
}

export type PopupProps = {
  show?: boolean
}
