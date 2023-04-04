type TabWidgetItemProps = {
  isLoading?: boolean
  isFetching?: boolean
  hideStatus?: boolean
  title?: string
  routePath?: string
  status?: string
  tabs: TabItem[]
  currentValue?: string
  isError?: boolean
  errorMessage?: string
  type?: string
  containerTitle: string
  renderSwitch: React.JSXElement
  borderRadius?: string
  btnLabel?: string
  btnVariant?: string
  btnHandler?: () => void
  showfilters?: { [key: string]: any }
}
