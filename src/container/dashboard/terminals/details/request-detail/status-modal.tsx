import { useState } from 'react'
import { SelectInput } from '../../../../../components'
import Modal from '../../../../../components/modal'
import { ModalLabel } from '../../../../../components/modal-label/modal.styles'
import { TextArea } from '../../terminalmodal.styles'

export const StatusModal = () => {
  const [order, setOrder] = useState(null)
  const [note, setNote] = useState('')
  return (
    <Modal
      showModal={true}
      setShowModal={() => console.log('sss')}
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
            options={[{ label: 'sss', value: 'Sss' }]}
            fullWidth
          />
          {order && (
            <>
              <ModalLabel>Reason for Rejecting Request</ModalLabel>
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
      handleSubmit={() => console.log('first')}
      buttonText="Update Status"
    />
  )
}
