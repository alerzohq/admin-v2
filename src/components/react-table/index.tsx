import { ReactNode } from 'react'
import {
  DataTable,
  DataTableTHead,
  DataTableHeadRow,
  DataTableHead,
  DataTableBody,
  DataTableBodyRow,
} from './Table.styles'
import { DynamicTableProps } from './types'

const DynamicTable = (props: DynamicTableProps) => {
  return (
    <DataTable>
      <DataTableTHead>
        <DataTableHeadRow>
          {props.mappers?.map((mapper, index: number) => {
            return (
              <DataTableHead
                style={mapper.sortable ? { cursor: 'pointer' } : {}}
                key={index}
              >
                {typeof mapper.title === 'string'
                  ? mapper.title
                  : mapper.title()}
              </DataTableHead>
            )
          })}
        </DataTableHeadRow>
      </DataTableTHead>
      <DataTableBody>
        {props.data.map((item, index: number) => {
          return (
            <DataTableBodyRow
              key={index}
              onClick={(e) => {
                e.preventDefault()
                props.handleClick?.(item)
              }}
            >
              {props.mappers?.map((mapper, i: number) => {
                return (
                  <td key={i} className={mapper.className}>
                    {
                      (mapper.render || ((rowData) => rowData[mapper.key]))(
                        item,
                        i
                      ) as ReactNode
                    }
                  </td>
                )
              })}
            </DataTableBodyRow>
          )
        })}
      </DataTableBody>
    </DataTable>
  )
}
export default DynamicTable
