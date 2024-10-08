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
  hideDate,
  setParams,
  notClickable,
  layout,
  routePath,
  noSlug,
  handleAction,
  actionBtnLabel,
  handleRouthPath,
}: TableProps) => {
  return (
    <>
      <TableWrapper>
        <DataTable
          bgColor={headerbgColor}
          layout={layout}
          borderBottom={tableData?.length <= 10}
        >
          <TableHeader headers={tableHeaders} />
          <TableData
            notClickable={notClickable}
            name={tableName}
            amountIndex={amountIndex}
            tableData={tableData}
            dateFormat={dateFormat ?? 'YYYY-MM-DD HH:mm:ss'}
            withSlug={withSlug}
            hideActive={notClickable}
            hideDate={hideDate}
            setParams={setParams}
            routePath={routePath}
            noSlug={noSlug}
            handleRouthPath={handleRouthPath}
            actionBtnLabel={actionBtnLabel}
            handleAction={handleAction}
          />
        </DataTable>
      </TableWrapper>
    </>
  )
}

export default Table
