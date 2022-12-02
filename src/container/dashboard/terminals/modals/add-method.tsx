import React from 'react'
import { TerminalModal, TerminalModalChild } from '../terminalmodal.styles'

import { TerminalManualAdd } from '../../../../assets/icons'
import {
  Edit,
  TerminalBulkAdd,
  Upload,
} from '../../../../assets/icons/terminals'
import Modal from '../../../../components/modal'
import { Text } from '../../../../components'

const AddMethodModal: React.FC<{
  isShown: boolean
  toggle: () => void
  setIsShown: (value: boolean) => void
  handleAddMethod: (method: 'manual' | 'excel' | '') => void
}> = ({ isShown, toggle, handleAddMethod, setIsShown }) => {



  return (
    <Modal
      showModal={isShown}
      setShowModal={toggle}
      title="Select Preferred Option"
      contentPadding={'0'}
      withoutFooter
      modalHeight="270px"
    >
      <TerminalModal>
        <TerminalModalChild
          onClick={() => {
            handleAddMethod('manual')
          }}
        >
          <div className="svg-container">
            <TerminalManualAdd width="100%" />
            <Edit className="svg-icon" />
          </div>
          <Text weight={'600'} justifyContent="center" padding={'8px 2rem'}>
            Manually Enter Information
          </Text>
        </TerminalModalChild>
        <TerminalModalChild
          onClick={() => {
            handleAddMethod('excel')
          }}
          
        >
          <div className="svg-container ">
              <TerminalBulkAdd width="100%" />
              {/* {isLoading ? (
                <Loader isUpload />
              ) : ( */}
                <Upload className="svg-icon" />
          </div>

          <Text
            width="100%"
            justifyContent="center"
            weight={'600'}
            padding={'8px 2rem'}
          >
            Upload Document
          </Text>
        </TerminalModalChild>
      </TerminalModal>
    </Modal>
  )
}

export default AddMethodModal
