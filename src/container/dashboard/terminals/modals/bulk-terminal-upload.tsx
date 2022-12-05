import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Modal from '../../../../components/modal'
import { Button } from '../../../../components'
import { useMutation, useQueryClient } from 'react-query'
import {
  Body,
  Container,
  Footer,
  ModalHeader,
  Span,
  Text,
} from '../terminalmodal.styles'
// import { TerminalBulkAdd } from '../../../../assets/icons/terminals'
import { BulkUpload, UploadIcon } from '../../../../assets/icons'
import { postRequest } from '../../../../utils/apiRequest'
import toast from 'react-hot-toast'
import { Color } from '../../../../assets/theme'
import { downloadBulkCSV } from '../../../../hooks/useDownload'

const BulkTerminalModal: React.FC<{
  addMethod: string
  handleAddMethod: (method: 'manual' | 'excel' | '') => void
}> = ({ addMethod, handleAddMethod }) => {
  const queryClient = useQueryClient()

  const [csvFile, setCsvFile] = useState<any>(null)
  const handleCancel = () => {
    setCsvFile(null)
    handleAddMethod('')
  }
  const handleExportCSV = () => {
    downloadBulkCSV()
  }

  const onDrop = useCallback((acceptedFiles: any) => {
    setCsvFile(acceptedFiles?.['0'])
  }, [])
  const useUploadMutation = () =>
    useMutation((payload: { [key: string]: any }) =>
      postRequest({ pathUrl: 'terminals/bulk', payload, methodType: 'post' })

    )
  const { isLoading: loading, mutate } = useUploadMutation()
  const handleSendBulk = () => {
    const payload = new FormData()
    payload.append('terminalUploadFile', csvFile!)
    mutate(payload, {
      onSuccess: () => {
        queryClient.invalidateQueries('terminal-stats')
        queryClient.invalidateQueries('terminals')
        handleAddMethod('')
        setCsvFile(null)
        toast.success(`Terminals uploaded successfully`)
      },
      onError: (error: any) => {
        setCsvFile(null)
        handleAddMethod('')
        toast.error(`${error?.response?.data?.message}`)
      },
    })
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })


  return (
    <Modal
      showModal={addMethod === 'excel'}
      setShowModal={() => {
        setCsvFile(null)
        handleAddMethod('')
      }}
      buttonText="Add Terminal"
      title=""
      contentPadding="0"
      modalWidth="650px"
      withoutFooter
      handleSubmit={() => {}}
    >
      <Container>
        <ModalHeader>
          <div style={{ width: '100%', margin: 'auto' }}>
            <Text size={'1rem'}>
              Download a{' '}
              <Span onClick={() => handleExportCSV()}>sample CSV template</Span>{' '}
              to see an example of the format required
            </Text>
          </div>
        </ModalHeader>
        <Body>
          <div className="dragdrop-input-wrapper" {...getRootProps()}>
            <div className="icon-box">
              <BulkUpload />
            </div>
            <input {...getInputProps()} id="actual-btn" />
            {isDragActive ? (
              <Text>Drop the files here ...</Text>
            ) : (
              <Button
                width="20%"
                borderSize="1px"
                onClick={() => {}}
                borderColor={Color.alerzoBlue}
                height='40px'
                margin="0 0 2rem 0"
                variant='transparent'
                color={Color.alerzoBlue}
              >
                Add File
              </Button>
            )}
          </div>
        </Body>
        <Text align="center" padding={'2rem 0'} color={'#001928cc'}>
          {csvFile ? csvFile?.name : 'or drag files to upload'}
        </Text>
        <Footer>

          <Button.Group align={'flex-end'}>
            <Button
              onClick={handleCancel}
              height={'45px'}
              width="20%"
              borderSize="1px"
              color={Color.alerzoBlue}
              variant="transparent"
              borderColor={Color.alerzoBlue}
            >
              {'Cancel'}
            </Button>
            <Button
              onClick={() => handleSendBulk()}
              height="45px"
              width="20%"
              variant={Color.alerzoBlue}
              color={'#FFF'}
              disabled={!csvFile || loading}
              disabledBgColor={Color.alerzoDisabledBg}
              disabledColor={Color.alerzoDisabled}
            >
              {loading ? 'Upload...' : ' Upload CSV'}{' '}
              <UploadIcon color={!csvFile || loading ? '#A1A8B7 ' : '#fff'} />
            </Button>
          </Button.Group>
        </Footer>
      </Container>
    </Modal>


  )
}

export default BulkTerminalModal
