import { AxiosError, AxiosResponse } from 'axios'
import { Dispatch, SetStateAction, useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { SelectInput } from '../../../../../components'
import Modal from '../../../../../components/modal'
import { ModalLabel } from '../../../../../components/modal-label/modal.styles'
import { axiosInstance } from '../../../../../configs/axios-instance'
import { TextArea } from '../../terminalmodal.styles'

enum OrderStatus {
  rejected = 'rejecting',
  approved = 'approving',
  shipped = 'shipping',
  delivered = 'delivering',
}

export const StatusModal = ({
  showModal,
  setShowModal,
  id,
  basicStatus,
  data,
}: {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  id?: string
  basicStatus?: boolean
  data: { [key: string]: any }
}) => {
  const navigate = useNavigate()

  const [order, setOrder] = useState<{ label: string; value: string } | null>(
    null
  )
  const [note, setNote] = useState('')
  const { mutate } = useMutation<
    AxiosResponse<any, any>,
    any,
    any,
    AxiosError<any, any>
  >(
    () => {
      return axiosInstance.patch(`terminals/requests/${id}/status`, {
        businessId: data.business.id,
        status: order?.value,
      })
    },
    {
      onSuccess: () => {
        setShowModal(false)
        toast.success('Status updated successfully')
        navigate('/dashboard/terminals?status=requests')
      },
    }
  )
  const statusData = data?.status
  return (
    <Modal
      showModal={showModal}
      setShowModal={setShowModal}
      title="Update Terminal Status"
      contentPadding={'0'}
      children={
        <>
          <ModalLabel>Order Status</ModalLabel>
          <SelectInput
            isClearable
            placeholder="Select order status"
            value={order}
            onChange={(val) => setOrder(val)}
            options={
              basicStatus
                ? [
                    { label: 'Reject Request', value: 'rejected' },
                    { label: 'Approve Request', value: 'approved' },
                  ]
                : [
                    ...(statusData?.[statusData?.length - 1]?.status ===
                    'processing'
                      ? [
                          { label: 'Reject Request', value: 'rejected' },
                          { label: 'Approve Request', value: 'approved' },
                        ]
                      : []),
                    ...(statusData?.[statusData?.length - 1]?.status ===
                    'approved'
                      ? [{ label: 'Ship', value: 'shipping' }]
                      : []),
                    ...(statusData?.[statusData?.length - 1]?.status ===
                    'shipping'
                      ? [{ label: 'Deliver', value: 'delivered' }]
                      : []),
                  ]
            }
            fullWidth
          />
          {order?.value === 'rejected' && (
            <>
              <ModalLabel>
                Reason for {(OrderStatus as any)[order.value]} request
              </ModalLabel>
              <TextArea
                className="p-0"
                placeholder={`Enter your reason for ${
                  (OrderStatus as any)[order.value]
                } this request`}
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></TextArea>
            </>
          )}
        </>
      }
      subTitleWhiteSpace={'pre-line'}
      handleSubmit={() => mutate({})}
      buttonText="Update Status"
    />
  )
}
