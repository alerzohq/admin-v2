export type TopBarProps = {
  title: string
  showFilters: {
    search: { type: string; placeholder: string }
    tidSearch: { type: string; placeholder: string }
    refSearch: { type: string; placeholder: string }
    date: boolean
    selects: {
      hideValue?: boolean
      styles?: StylesConfig<Coptions>
      searchQuery?: string
      isSearchable?: boolean
      shouldSetQuery?: boolean
      values: any[]
      placeholder: string
      onChange: (e?: any) => void
      value: string
      action?: boolean
      isClearable?: boolean
    }[]
    buttons: {
      label: string
      buttonClass?: string
      onClick: () => void
    }[]
  }

  isFetching?: boolean
  setFilterValues?: any
  routePath?: () => string | string
  whiteSpace?: string
  withParams?: boolean
}
