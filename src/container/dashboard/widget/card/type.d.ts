type CardWidgetItemProps = {
  text: string
  value: string | number
  Icon?: React.JSXElement
  loading?: boolean
}

type StatsProps = {
  stats?: {
    totalAmountDeposited: number
    totalAmountWithdrawn: number
    totalUsers: number
    totalTransactions: number
  }
  loading?: boolean
}
