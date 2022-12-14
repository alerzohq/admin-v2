import React, { useState } from 'react'
import DetailsContent from '../../../widget/tabs/tab-content-details'
import { Wrapper } from './styles/request-details.style'
import POSRow from './pos-row'
import { StatusModal } from './status-modal'
import { terminalRequestHelper } from '../../../../../data/terminal-data'
import Button from './../../../../../components/button'

export const DetailsContentComp = () => {
  const [showStatusModal, setShowStatusModal] = useState(false)
  return (
    <>
      <DetailsContent resolvedData={terminalRequestHelper()} />
      <Wrapper>
        <POSRow />
      </Wrapper>
      <Button
        margin="2rem auto"
        onClick={() => setShowStatusModal(true)}
        className="add-button"
        width="25%"
      >
        Update Terminal Status
      </Button>

      <StatusModal
        showModal={showStatusModal}
        setShowModal={() => setShowStatusModal(false)}
      />
    </>
  )
}
