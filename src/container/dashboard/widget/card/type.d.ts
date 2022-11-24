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
  statistics?: {
    card1: number | string
    card2: number | string
    card3: number | string
    card4: number | string
  }
  labels?: {
    card1: string
    card2: string
    card3: string
    card4: string
  }
  icons?: {
    card1?: React.JSXElement
    card2?: React.JSXElement
    card3?: React.JSXElement
    card4?: React.JSXElement
  }
  loading?: boolean
}
