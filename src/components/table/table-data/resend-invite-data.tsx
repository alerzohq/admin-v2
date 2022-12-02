import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { transformData } from '../../../helper/table.helper'
import { formatDate, amountConverter } from '../../../utils/formatValue'
import Button from '../../button'
import { TableItemDiv } from './table.style'
import { Color } from '../../../assets/theme'
import ConfirmResendInvite from './resend-invite-modal'

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

const CustomInviteTable = ({
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
  const params = Object.fromEntries(searchParams)
  const [showModal, setShowModal] = useState(false)
  const [rowData, setRowData] = useState<undefined | string[]>([])
  return (
    <tbody>
      {showModal && (
        <ConfirmResendInvite
          role={rowData?.[1]}
          email={rowData?.[0]}
          id={rowData?.[4]}
          showConfirmModal={showModal}
          handleShow={setShowModal}
        />
      )}
      {tableData?.map((item, index) => {
        let newObj = transformData({ item, name })
        let dataList: dataList = newObj && Object.values(newObj)
        const lastItem = dataList?.at(-1)
        return (
          <tr key={index}>
            {dataList?.slice(0, 4).map((data, i) => (
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
                  className={i === 0 && !hideActive ? 'tableLink' : ''}
                >
                  {lastItem && lastItem === data && !hideDate ? (
                    formatDate(data, dateFormat || 'lll')
                  ) : i === amountIndex ? (
                    `₦${amountConverter(data)}`
                  ) : data === 'sendInvite' ? (
                    <Button
                      onClick={() => {
                        setRowData(dataList)
                        setShowModal(true)
                      }}
                      height="25px"
                      width="auto"
                      borderColor={Color.alerzoBlueTint}
                      variant="transparent"
                      color={Color.alerzoBlueTint}
                    >
                      Resend Invite
                    </Button>
                  ) : (
                    data
                  )}
                </TableItemDiv>
              </td>
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}

export default CustomInviteTable
