import { formatDate } from '../utils/formatValue'

export const DETAILSTABLE = [
  { label: 'Product Name', value: 'name', columnWidth: 'small' },
  { label: 'Product Category', value: 'category', columnWidth: 'small' },
  { label: 'Stakeholders', value: 'status', columnWidth: 'small' },
  { label: 'Date Created', value: 'date', columnWidth: 'large' },
]
export const productHelper = (data: any) => {
  return [
    {
      spacing: false,
      header: DETAILSTABLE,
      data: {
        name: data?.name?.toUpperCase(),
        category: data?.name?.toUpperCase(),
        status: data?.commission?.splits?.length > 0 ? 'Yes' : 'No',
        date: data?.created_at
          ? formatDate(data?.created_at, 'YYYY-MM-DD HH:mm:ss')
          : '',
      },
    },
  ]
}
