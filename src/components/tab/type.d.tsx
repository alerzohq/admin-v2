export type TabsPageProps = {
  children?: React.ReactNode
}

export type TabsTitleProps = {
  active?: boolean
  item: TabItem
  tabs?: TabItem[]
  color?: string
  onClick: () => void
}
export type TabsProps = {
  tabs: TabItem[]
  color?: string
  currentValue?: string
  hideStatus?: boolean
  component?: React.ReactNode
}
export type TabItem = {
  label: string
  value: string
  title?: string
}
