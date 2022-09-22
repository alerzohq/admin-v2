import React from 'react'
import { TableWrapper, DataTable } from './styles/table.styles'
import TableData from './table-data'
import TableHeader from './table-headers'
import { TableProps } from './type'

const Table = ({
  tableHeaders,
  tableData,
  headerbgColor,
  tableName,
  amountIndex,
  dateFormat,
  withSlug,
  hideActive,
}: TableProps) => {
  return (
    <>
      <TableWrapper>
        <DataTable bgColor={headerbgColor}>
          <TableHeader headers={tableHeaders} />
          <TableData
            name={tableName}
            amountIndex={amountIndex}
            tableData={tableData}
            dateFormat={dateFormat}
            withSlug={withSlug}
            hideActive={hideActive}
          />
        </DataTable>
      </TableWrapper>
    </>
  )
}

export default Table
