import React from 'react'
import { TableWrapper,DataTable} from './styles/table.styles'
import TableData from './table-data'
import TableHeader from './table-headers'
import { TableProps } from './type'



const Table = ({tableHeaders,tableData}:TableProps) => {


  return (
    <>
    
      <TableWrapper>
          <DataTable>
            <TableHeader  headers={tableHeaders} />
            <TableData  tableData={tableData}/>  
          </DataTable>
      </TableWrapper>

   
    </>
  )
}

export default Table