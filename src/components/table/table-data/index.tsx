import React from 'react'
import { useNavigate } from 'react-router-dom'
import { transformData } from '../../../helper/table.helper'
import { formatDate, numberWithCommas } from '../../../utils/formatValue'

export type selectedDataType = {
  [key: string]: any
}

type dataProps = {
  tableData: selectedDataType[]
  name: string
  amountIndex?: number
  withSlug?: boolean
  dateFormat?: string
}
type dataList = string[] | undefined

const TableData = ({
  tableData,
  name,
  amountIndex,
  withSlug,
  dateFormat,
}: dataProps) => {
  const navigate = useNavigate()

  return (
    <tbody>
      {tableData?.map((item, i) => {
        let newObj = transformData({ item, name })
        let dataList: dataList = newObj && Object.values(newObj)
        const lastItem = dataList?.[dataList?.length - 1]
        return (
          <tr key={i}>
            {dataList?.map((data, i) => (
              <td key={i} id="td-hover">
                <div
                  onClick={() => {
                    navigate(
                      withSlug
                        ? `${item?.id}/${item?.product?.slug}`
                        : `${item?.id}`,
                      {
                        state: { detail: item },
                      }
                    )
                  }}
                  className={
                    data === 'successful' || data === 'Active'
                      ? 'success'
                      : data === 'pending'
                      ? 'pending'
                      : data === 'failed' || data === 'Inactive'
                      ? 'failed'
                      : '' + (i === 0 && 'tableLink')
                  }
                >
                  {lastItem && lastItem === data
                    ? formatDate(data, dateFormat || 'lll')
                    : i === amountIndex
                    ? `₦${numberWithCommas(data)}`
                    : data}
                </div>
              </td>
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableData
