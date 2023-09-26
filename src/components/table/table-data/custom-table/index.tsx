import { DataTable, TableWrapper } from '../../styles/table.styles'
import TableHeader from '../../table-headers'
import CustomTableData, { DataProps } from '../custom-table-data'

const CustomTable = ({
  headers,
  name,
  actionPlaceholder,
  options,
  tableData,
  notClickable,
  actionBtn,
  handleChange,
}: DataProps & { headers: string[] }) => {
  return (
    <TableWrapper>
      <DataTable bgColor="transparent" layout="fixed">
        <TableHeader headers={headers} />
        <CustomTableData
          notClickable={notClickable}
          name={name}
          actionPlaceholder={actionPlaceholder}
          hideDate
          actionBtn={actionBtn}
          tableData={tableData}
          handleChange={handleChange}
          options={options}
        />
      </DataTable>
    </TableWrapper>
  )
}

export default CustomTable
