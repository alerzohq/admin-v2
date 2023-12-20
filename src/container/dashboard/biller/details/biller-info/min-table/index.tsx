import { formatDate } from '../../../../../../utils/formatValue'
import { MinTable } from './styles/min-table.styles'

const MinDataTable = ({
  tableHeaders,
  data,
}: {
  data: Record<string, any>
  tableHeaders: string[]
}) => {
  return (
    <MinTable>
      <thead>
        <tr>
          {tableHeaders.map((title, i) => (
            <th key={i}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data?.displayName}</td>
          <td>{data?.email || 'N/A'}</td>
          <td>{data?.phoneNumber || 'N/A'}</td>
          <td>
            <div className={data?.disabled ? 'failed' : 'success'}>
              {data?.disabled ? 'Inactive' : 'Active'}
            </div>
          </td>
          <td>
            {data?.created_at
              ? formatDate(data?.created_at, 'YYYY-MM-DD HH:mm:ss')
              : ''}
          </td>
          <td>
            {data?.updated_at
              ? formatDate(data?.updated_at, 'YYYY-MM-DD HH:mm:ss')
              : 'N/A'}
          </td>
        </tr>
      </tbody>
    </MinTable>
  )
}

export default MinDataTable
