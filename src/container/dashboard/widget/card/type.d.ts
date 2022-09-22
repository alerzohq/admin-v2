type CardWidgetItemProps = {
  text: string;
  value: string | number;
  Icon?: React.JSXElement;
  loading?: boolean;
}

type StatsProps = {
  stats?:{
  totalDeposits:number;
  totalTransactions: number;
  totalUniqueUsers: number;
  totalWithrawals: number;
  },
  loading?:boolean;
}
