import React, { ReactNode } from 'react'
import { DataTable } from './Table.styles'
import { DynamicTableProps } from './types'

const DynamicTable = (props: DynamicTableProps) => {
  return (
    <DataTable>
      <thead>
        <tr>
          {props.mappers?.map((mapper, index: number) => {
            return (
              <th
                style={mapper.sortable ? { cursor: 'pointer' } : {}}
                key={index}
              >
                {typeof mapper.title === 'string'
                  ? mapper.title
                  : mapper.title()}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index: number) => {
          return (
            <tr key={index}>
              {props.mappers?.map((mapper, i: number) => {
                return (
                  <td key={i}>
                    {
                      (mapper.render || ((data) => data[mapper.key]))(
                        item,
                        i
                      ) as ReactNode
                    }
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </DataTable>
  )
}
export default DynamicTable
