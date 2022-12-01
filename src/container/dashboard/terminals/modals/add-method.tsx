import React, { useState } from 'react'
import { TerminalModal, TerminalModalChild } from '../terminalmodal.styles'

import { TerminalManualAdd } from '../../../../assets/icons'
import {
  Edit,
  TerminalBulkAdd,
  Upload,
} from '../../../../assets/icons/terminals'
import Modal from '../../../../components/modal'
import { Loader, Text } from '../../../../components'
import { useEffect } from 'react'
import { postRequest } from '../../../../utils/apiRequest'
import { useMutation, useQueryClient } from 'react-query'
import toast from 'react-hot-toast'

const AddMethodModal: React.FC<{
  isShown: boolean
  toggle: () => void
  setIsShown: (value: boolean) => void
  handleAddMethod: (method: 'manual' | 'excel' | '') => void
}> = ({ isShown, toggle, handleAddMethod, setIsShown }) => {
  const [file, setFile] = useState(null)
  const handleFileChange = (e: any) => {
    let imgFile = e.target.files[0]
    setFile(imgFile)
  }

  const useUploadMutation = () =>
    useMutation((payload: { [key: string]: any }) =>
      postRequest({ pathUrl: 'terminals/bulk', payload, methodType: 'post' })
    )
  const { isLoading, mutate } = useUploadMutation()
  const queryClient = useQueryClient()
  useEffect(() => {
    if (file) {
      const payload = new FormData()
      payload.append('terminalUploadFile', file!)
      mutate(payload, {
        onSuccess: () => {
          queryClient.invalidateQueries('terminal-stats')
          queryClient.invalidateQueries('terminals')
          setIsShown(false)
          setFile(null)
          toast.success(`Terminals uploaded successfully`)
        },
        onError: (error: any) => {
          setFile(null)
          toast.error(`${error?.response?.data?.message}`)
        },
      })
    }
  }, [file])

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
          className={isLoading ? 'disabled' : ''}
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
          onClick={() => {}}
          className={isLoading ? 'disabled' : ''}
        >
          <div className="svg-container ">
            <input
              type="file"
              hidden
              id="actual-btn"
              onChange={handleFileChange}
            />
            <label htmlFor="actual-btn">
              <TerminalBulkAdd width="100%" />
              {isLoading ? (
                <Loader isUpload />
              ) : (
                <Upload className="svg-icon" />
              )}
            </label>
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
