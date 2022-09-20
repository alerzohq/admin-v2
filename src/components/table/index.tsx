import React from 'react'
import { TableWrapper, DataTable } from './styles/table.styles'
import TableData from './table-data'
import TableHeader from './table-headers'
import { TableProps } from './type'

const Table = ({
  tableHeaders,
  tableData,
  tableName,
  amountIndex,
  dateFormat,
  withSlug,
}: TableProps) => {
  return (
    <>
      <TableWrapper>
        <DataTable>
          <TableHeader headers={tableHeaders} />
          <TableData
            name={tableName}
            amountIndex={amountIndex}
            tableData={tableData}
            dateFormat={dateFormat}
            withSlug={withSlug}
          />
        </DataTable>
      </TableWrapper>
    </>
  )
}

export default Table
