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
    console.log('clicked')
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
      title="Add New Terminal"
      contentPadding="0"
      modalWidth="50%"
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
                height={'40px'}
                variant={'transparent'}
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
          <Text
            size={'0.875rem'}
            color={'#0077FF'}
            cursor={'pointer'}
            onClick={() => {}}
          >
            Need help uploading CSV?
          </Text>

          <Button.Group width="50%" align={'flex-end'}>
            <Button
              onClick={handleCancel}
              height={'45px'}
              width="40%"
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
              width="40%"
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

    // <Modal
    //   showModal={addMethod === 'manual'}
    //   setShowModal={() => handleAddMethod('')}
    //   buttonText="Add Terminal"
    //   title="Add New Terminal"
    //   contentPadding={'0'}
    //   handleSubmit={async () => {
    //     handleIsTriggerSubmit(true)
    //     if (addValues.serialNumber && addValues.specification) {
    //       handleIsTriggerSubmit(false)
    //       mutation.mutate(addValues)
    //     }
    //   }}
    // >
    //   <>
    //     <Form>
    //       <Form.Control pb={'1rem'}>
    //         <Form.Label>Serial Number</Form.Label>
    //         <Form.Input
    //           type="text"
    //           onChange={(e) =>
    //             handleChange('serialNumber', e.target.value.trim())
    //           }
    //           placeholder="Enter serial number"
    //           value={addValues.serialNumber}
    //         />
    //         {isTriggerSubmit && (
    //           <Text
    //             padding="8px"
    //             as={'small'}
    //             weight={'500'}
    //             color={Color.alerzoDanger}
    //           >
    //             {isTriggerSubmit && addValues.serialNumber === ''
    //               ? 'Serial Number is required*'
    //               : ''}
    //           </Text>
    //         )}
    //       </Form.Control>
    //       <Form.Control pb={'1rem'}>
    //         <Form.Label>POS Variant</Form.Label>
    //         {!specsLoading && (
    //           <SelectInput
    //             fullWidth
    //             placeholder="Select POS variant"
    //             options={[
    //               {
    //                 value: '',
    //                 label: 'Select POS variant',
    //                 disabled: true,
    //               },
    //               ...specs?.data?.map(
    //                 (spec: { variant: string; id: string }) => {
    //                   return {
    //                     value: spec.id,
    //                     label: spec.variant,
    //                   }
    //                 }
    //               ),
    //             ]}
    //             onChange={(e) => {
    //               handleChange('specification', e.value)
    //             }}
    //             value={addValues.specification}
    //           />
    //         )}
    //         {isTriggerSubmit && (
    //           <Text
    //             padding="8px"
    //             as={'small'}
    //             weight={'500'}
    //             color={Color.alerzoDanger}
    //           >
    //             {isTriggerSubmit && addValues.specification === ''
    //               ? 'POS Variant is required*'
    //               : ''}
    //           </Text>
    //         )}
    //       </Form.Control>
    //     </Form>
    //     {mutation.isError && (
    //       <Text
    //         padding="8px"
    //         as={'small'}
    //         weight={'500'}
    //         color={Color.alerzoDanger}
    //       >
    //         {mutation.error.response.data.message as string}
    //       </Text>
    //     )}
    //   </>
    // </Modal>
  )
}

export default BulkTerminalModal
