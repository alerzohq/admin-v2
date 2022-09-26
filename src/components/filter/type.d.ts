export type FilterProps = {
  showFilters: {
    search: { type: string; placeholder: string }
    date: boolean
    selects: {
      values: any[]
      placeholder: string
      onChange: () => void
      value: string
    }[]
    buttons: {
      label: string
      onClick: () => void
      buttonClass?: string
    }[]
  }
  isFetching?: boolean
  setFilterValues?: any
  routePath?: string
}
