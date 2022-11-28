import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { transformData } from '../../../helper/table.helper'
import { formatDate, amountConverter } from '../../../utils/formatValue'
import { TableItemDiv } from './table.style'

export type selectedDataType = {
  [key: string]: any
}

type dataProps = {
  tableData: selectedDataType[]
  name: string
  amountIndex?: number
  withSlug?: boolean
  dateFormat?: string
  hideActive?: boolean
  hideDate?: boolean
  setParams?: boolean
  notClickable?: boolean
}
type dataList = string[] | undefined

const TableData = ({
  tableData,
  name,
  amountIndex,
  withSlug,
  dateFormat,
  hideActive,
  hideDate,
  setParams,
  notClickable,
}: dataProps) => {
  const navigate = useNavigate()
  const [searchParams, setQueryParams] = useSearchParams()
  const params = Object.fromEntries(searchParams);

  
  return (
    <tbody>
      {tableData?.map((item, index) => {
        let newObj = transformData({ item, name })
        let dataList: dataList = newObj && Object.values(newObj)
        const lastItem = dataList?.at(-1)
        return (
          <tr key={index}>
            {dataList?.map((data, i) => (
              <td key={i} id="td-hover">
                <TableItemDiv
                  onClick={
                    notClickable
                      ? () => {}
                      : setParams
                      ? () => {
                          setQueryParams(
                            { ...params },
                            {
                              state: { detail: item },
                            }
                          )
                        }
                      : () => {
                          navigate(
                            withSlug
                              ? `${item?.id}/${item?.product?.slug}`
                              : `${item?.id}`,
                            {
                              state: { detail: item },
                            }
                          )
                        }
                  }
                  className={
                    data === 'successful' ||
                    data === 'Active' ||
                    data === 'approved'
                      ? 'success'
                      : data === 'Unassigned'
                      ? 'unassigned'
                      : data === 'pending' || data === 'processing'
                      ? 'pending'
                      : data === 'failed' || data === 'Inactive'
                      ? 'failed'
                      : formatDate(item?.loginDate, 'YYYY-MM-DD HH:mm:ss') ===
                        data
                      ? 'successText'
                      : formatDate(item?.logoutDate, 'YYYY-MM-DD HH:mm:ss') ===
                        data
                      ? 'dangerText'
                      : data === 'Session ongoing'
                      ? 'pendingText'
                      : '' + (i === 0 && !hideActive && 'tableLink')
                  }
                >
                  {lastItem && lastItem === data && !hideDate
                    ? formatDate(data, dateFormat || 'lll')
                    : i === amountIndex
                    ? `₦${amountConverter(data)}`
                    : data}
                </TableItemDiv>
              </td>
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableData
