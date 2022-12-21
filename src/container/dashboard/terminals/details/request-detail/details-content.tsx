import React, { useState } from 'react'
import DetailsContent from '../../../widget/tabs/tab-content-details'
import { Wrapper } from './styles/request-details.style'
import POSRow from './pos-row'
import { StatusModal } from './status-modal'
import { terminalRequestHelper } from '../../../../../data/terminal-data'
import Button from './../../../../../components/button'
import { useLocation } from 'react-router-dom'
interface Location {
  businessId: string
  status: { status: string }[]
}

export const DetailsContentComp = ({ terminalId }: { terminalId?: string }) => {
  const [showStatusModal, setShowStatusModal] = useState(false)
  const location = useLocation()
  const state = location.state as Location

  return (
    <>
      <DetailsContent resolvedData={terminalRequestHelper()} />
      <Wrapper>
        <POSRow />
      </Wrapper>

      {state.status[state.status.length - 1]?.status === 'delivered' ? null : (
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
      />
    </>
  )
}
