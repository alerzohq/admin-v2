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
          <td>{data?.email}</td>
          <td>{data?.phoneNumber}</td>
          <td>
            <div className={data?.status ? 'success' : 'failed'}>
              {data?.status ? 'Active' : 'Inactive'}
            </div>
          </td>
          <td>{data?.created_at}</td>
          <td>{data?.updated_at}</td>
        </tr>
      </tbody>
    </MinTable>
  )
}

export default MinDataTable
