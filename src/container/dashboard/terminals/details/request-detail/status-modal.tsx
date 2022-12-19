import { AxiosError, AxiosResponse } from 'axios'
import { Dispatch, SetStateAction, useState } from 'react'
import { useMutation } from 'react-query'
import { SelectInput } from '../../../../../components'
import Modal from '../../../../../components/modal'
import { ModalLabel } from '../../../../../components/modal-label/modal.styles'
import { axiosInstance } from '../../../../../configs/axios-instance'
import { TextArea } from '../../terminalmodal.styles'

enum OrderStatus {
  Reject = 'rejecting',
  Approve = 'approving',
  Ship = 'shipping',
  Deliver = 'delivering',
}

export const StatusModal = ({
  showModal,
  setShowModal,
  id,
}: {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  id?: string
}) => {
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
        businessId: '70946758-9c2d-4ad1-bb65-c3cf3daf168d',
        status: order?.value,
      })
    },
    {
      onSuccess: () => {
        setShowModal(false)
      },
    }
  )

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
            options={[
              { label: 'Reject', value: 'rejected' },
              { label: 'Approve', value: 'approved' },
              { label: 'Ship', value: 'shipping' },
              { label: 'Deliver', value: 'delivered' },
            ]}
            fullWidth
          />
          {order && (
            <>
              <ModalLabel>
                Reason for {(OrderStatus as any)[order.label]} request
              </ModalLabel>
              <TextArea
                className="p-0"
                placeholder="Enter your reason for rejecting this request"
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
