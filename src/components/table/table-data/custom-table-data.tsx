import { useNavigate, useSearchParams } from 'react-router-dom'
import { SelectInput } from '../..'
import { transformData } from '../../../helper/table.helper'
import { amountConverter, formatDate } from '../../../utils/formatValue'
import { selectStyles } from '../../select-input/styles/select-input.styes'
import { ActionButton } from '../styles/table.styles'

export type selectedDataType = {
  [key: string]: any
}

export type DataProps = {
  tableData: selectedDataType[]
  name: string
  amountIndex?: number
  withSlug?: boolean
  dateFormat?: string
  hideActive?: boolean
  actionBtn?: boolean
  hideDate?: boolean
  setParams?: boolean
  notClickable?:boolean
  selectIndex?: number
  buttonTitle?: string
  actionPlaceholder?:string
  options?: any[]
  handleChange?: (item: Record<string, string>) => void
  handleRouthPath?: (item: Record<string, string>) => void
}
type DataList = string[] | undefined

const CustomTableData = ({
  tableData,
  name,
  amountIndex,
  hideActive,
  dateFormat,
  actionPlaceholder,
  hideDate,
  notClickable,
  options,
  actionBtn,
  buttonTitle,
  handleRouthPath,
  handleChange,
}: DataProps) => {
  const navigate = useNavigate()
  const [searchParams, setQueryParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  return (
    <tbody>
      {tableData?.map((item, index) => {
        let newObj = transformData({ item, name })
        let dataList: DataList = newObj && Object.values(newObj)
        const lastItem = dataList?.at(-1)
        return (
          <tr key={index}>
            {dataList?.map((data, i) => (
              <td key={i} id="td-hover">
                <div
                  onClick={
                    !!handleRouthPath
                      ? () => {
                          handleRouthPath?.(item)
                        }
                      : i === 0 && !notClickable
                      ? () => {
                          navigate(`${item?.slug}`, {
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
                  {lastItem && lastItem === data && !hideDate
                    ? formatDate(data, dateFormat || 'lll')
                    : i === amountIndex
                    ? `₦${amountConverter(data)}`
                    : data}
                </div>
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
                {options && (
                  <SelectInput
                    placeholder={actionPlaceholder??"Change Biller"}
                    onChange={(e) => {
                      handleChange?.({
                        newBiller: e.value,
                        oldBiller: item?.billerSlug,
                        displayName: item?.displayName,
                      })
                    }}
                    value={'Change Biller'}
                    styles={selectStyles(true)}
                    options={options}
                    isClearable={false}
                    hideValue
                  />
                )}
                {actionBtn && (
                  <ActionButton onClick={() => handleChange?.(item)}>
                    {buttonTitle ?? 'Change Rate'}
                  </ActionButton>
                )}
              </div>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default CustomTableData
