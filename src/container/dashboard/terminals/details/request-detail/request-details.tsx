import React, { useState } from 'react'
import DetailsContent from '../../../widget/tabs/tab-content-details'
import { Wrapper } from './styles/request-details.style'
import POSRow from './pos-row'
import { StatusModal } from './status-modal'
import { terminalRequestHelper } from '../../../../../data/terminal-data'
import Button from '../../../../../components/button'
import { useLocation } from 'react-router-dom'

export const RequestDetails = ({ terminalId, data }: ITerminalReqDetails) => {
  const [showStatusModal, setShowStatusModal] = useState(false)
  interface Location {
    businessId: string
    status: { status: string }[]
  }
  const location = useLocation()
  const state = location.state as Location
  return (
    <>
      <DetailsContent resolvedData={terminalRequestHelper(data)} />
      <Wrapper>
        <POSRow units={data?.data?.units} />
      </Wrapper>
      {state?.status[state?.status?.length - 1]?.status !== 'delivered' &&
        state?.status[state?.status?.length - 1]?.status !== 'rejected' && (
          <Button
            margin="2rem auto"
            onClick={() => setShowStatusModal(true)}
            className="add-button"
            width="25%"
          >
            Update Terminal Status
          </Button>
        )}
      <StatusModal
        showModal={showStatusModal}
        setShowModal={() => setShowStatusModal(false)}
        id={terminalId}
        basicStatus
        data={data?.data}
      />
    </>
  )
}
