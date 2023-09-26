import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { transformData } from '../../../helper/table.helper'
import { formatDate, amountConverter } from '../../../utils/formatValue'
import { TableButton, TableItemDiv } from './table.style'
import { useAppContext } from '../../../context'
import { Action } from '../../../context/actions'
import { getClassNames } from './table-classnames'

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
  routePath?: string
  noSlug?: boolean
  handleRouthPath?: (item: { [key: string]: any }) => void
  handleAction?:(item: { [key: string]: any }) => void
  actionBtnLabel?: string;
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
  routePath,
  noSlug,
  actionBtnLabel,
  handleRouthPath,
  handleAction
}: dataProps) => {
  const { dispatch } = useAppContext()
  const navigate = useNavigate()
  const [searchParams, setQueryParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  //TODO REFACTOR

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
                    !!handleRouthPath
                      ? () => {
                          handleRouthPath?.(item)
                        }
                      : notClickable
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
                      : routePath
                      ? () => {
                          name === 'requestsTerrminals' &&
                            dispatch({
                              type: Action.SAVETERMINALREQ,
                              payload: item,
                            })
                          navigate(
                            withSlug
                              ? `/${routePath}/${item?.id}/${item?.product?.slug}`
                              : noSlug
                              ? `/${routePath}`
                              : `/${routePath}/${item?.id}`,
                            { replace: true, state: item }
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

                  className={getClassNames(data, item, i, hideActive)}
                >
                  {lastItem && lastItem === data && !hideDate
                    ? formatDate(data, dateFormat || 'lll')
                    : i === amountIndex
                    ? `₦${amountConverter(data)}`
                    : data}

                </TableItemDiv>
              </td>
            ))}
           {handleAction &&(<td><TableButton onClick={()=>handleAction(item)}>{actionBtnLabel??'Edit'}</TableButton></td>)}
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableData
