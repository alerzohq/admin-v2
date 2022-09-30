import React from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { SelectInput } from '../..'
import { transformData } from '../../../helper/table.helper'
import { formatDate, amountConverter } from '../../../utils/formatValue'
import { blueColorStyles } from '../../select-input/styles/select-input.styes'

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
  selectIndex?: number
  options?: any[]
  handleSelectChange?: (e: string) => void
}
type dataList = string[] | undefined

const CustomTableData = ({
  tableData,
  name,
  amountIndex,
  hideActive,
  options,
  selectIndex,
  handleSelectChange,
}: dataProps) => {
  const navigate = useNavigate()
  const [searchParams, setQueryParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)
  return (
    <tbody>
      {tableData?.map((item, index) => {
        let newObj = transformData({ item, name })
        let dataList: dataList = newObj && Object.values(newObj)
        const lastItem = dataList?.[dataList?.length - 1]
        return (
          <tr key={index}>
            {dataList?.map((data, i) => (
              <td key={i} id="td-hover">
                {i !== selectIndex ? (
                  <div
                    onClick={
                      i === 0
                        ? () => {
                            navigate(`${item?.id}`, {
                              state: { detail: item },
                            })
                          }
                        : () => {}
                    }
                    className={
                      data === 'successful' || data === 'Active'
                        ? 'success'
                        : data === 'pending'
                        ? 'pending'
                        : data === 'failed' || data === 'Inactive'
                        ? 'failed'
                        : '' + (i === 0 && !hideActive && 'tableLink')
                    }
                  >
                    {lastItem && lastItem === data && i === amountIndex
                      ? `₦${amountConverter(data)}`
                      : data}
                  </div>
                ) : (
                  <SelectInput
                    key={i}
                    placeholder="Change Biller"
                    onChange={() =>
                      setQueryParams(
                        { ...params },
                        {
                          state: { selectData: item },
                        }
                      )
                    }
                    value={item.billerSlug}
                    options={options}
                  />
                )}
              </td>
            ))}
            <td id="td-hover">
              <div
                onClick={() => {
                  setQueryParams(
                    { ...params },
                    {
                      state: { selectData: item },
                    }
                  )
                }}
                className="select-wrap"
              >
                <SelectInput
                  placeholder="Change Biller"
                  onChange={(e) => {
                    handleSelectChange?.(e.value)
                  }}
                  placeholderStyle="blue-select-placeholder"
                  value={'Change Biller'}
                  styles={blueColorStyles}
                  options={options}
                  isClearable={false}
                />
              </div>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default CustomTableData
