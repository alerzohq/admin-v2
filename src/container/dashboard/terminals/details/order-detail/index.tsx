import {
  TimelineWrapper,
  Timeline,
  TimelineItem,
} from './styles/order-detail.styles'
import Button from '../../../../../components/button/index'
import { formatDate } from '../../../../../utils/formatValue'
import { useState } from 'react'
import { StatusModal } from '../request-detail/status-modal'

const TerminalOrder = ({ data, terminalId }: ITerminalReqProcess) => {
  const [showStatusModal, setShowStatusModal] = useState(false)
  const resolveStatus = (status: string) => {
    const isFound = data?.status?.filter((val) => val?.status === status)
    return isFound
  }
  const currentStatus = data?.status?.[data?.status?.length - 1]?.status
  const timeline =
    currentStatus === 'rejected'
      ? [
          {
            status: 'processing',
            value: 'Terminal Request Accepted For Processing',
          },
          {
            status: 'rejected',
            value: 'Terminal Request Has Been Rejected',
          },
        ]
      : [
          {
            status: 'processing',
            value: 'Terminal Request Accepted For Processing',
          },
          {
            status: currentStatus === 'rejected' ? 'rejected' : 'approved',
            value:
              currentStatus === 'rejected'
                ? 'Terminal Request Has Been Rejected'
                : 'Terminal Request Has Been Approved',
          },
          {
            status: 'shipping',
            value: 'Terminal Shipped Out',
          },
          {
            status: 'delivered',
            value: 'Terminal Delivered To Merchant',
          },
        ]
  return (
    <TimelineWrapper>
      <Timeline>
        {timeline?.map((val, index) => {
          const orderStatus = resolveStatus(val?.status)
          const found = orderStatus?.length > 0
          const status = timeline[index + 1]?.status
          const nextOrder = resolveStatus(status)
          const foundNext = nextOrder?.length > 0
          return (
            <TimelineItem
              key={index}
              className={
                currentStatus === val?.status && index === timeline?.length - 1
                  ? 'is-done  last'
                  : currentStatus === val?.status
                  ? 'current'
                  : index === timeline?.length - 1
                  ? 'last'
                  : foundNext
                  ? 'is-done'
                  : ''
              }
            >
              {found ? (
                <>
                  <strong>{val?.value}</strong>
                  <span>
                    {formatDate(orderStatus?.[0]?.timestamp, 'DD-MM-YYYY')}
                  </span>
                </>
              ) : (
                val?.value
              )}
            </TimelineItem>
          )
        })}
      </Timeline>
    
        <Button
          margin="2rem 0"
          onClick={() => setShowStatusModal(true)}
          className="add-button"
          width="auto"
        >
          Update Terminal Status
        </Button>
      
      <StatusModal
        showModal={showStatusModal}
        setShowModal={() => setShowStatusModal(false)}
        id={terminalId}
        data={data}
      />
    </TimelineWrapper>
  )
}

export default TerminalOrder
