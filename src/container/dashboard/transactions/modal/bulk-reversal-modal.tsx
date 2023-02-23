import React, { Dispatch, SetStateAction, useState } from 'react'
import { useCSVReader } from 'react-papaparse'
import { CSVLink } from 'react-csv'

import Modal from '../../../../components/modal'
import { Button, Stack, Text } from '../../../../components'
import { BulkUpload, UploadIcon } from '../../../../assets/icons'
import { Color } from '../../../../assets/theme'
import {
  Body,
  Container,
  Footer,
  ModalHeader,
  Span,
} from '../../terminals/terminalmodal.styles'
import useReversalMutation from '../hooks/useReversalMutation'
import SucccessReversalModal from './success-reversal-modal'

type BulkReversalProps = {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  setValue: Dispatch<SetStateAction<string>>
}

const BulkReversalModal: React.FC<BulkReversalProps> = ({
  showModal,
  setShowModal,
  setValue,
}) => {
  const { CSVReader } = useCSVReader()
  const [csvFile, setCsvFile] = useState<any>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const { isLoading: loading, mutate } = useReversalMutation({
    setShowModal,
    showModal,
    setValue,
    setShowSuccess,
  })
  const handleCancel = () => {
    setCsvFile(null)
    setShowModal(!showModal)
  }

  let payload = { references: csvFile?.filter((val: string) => val !== '') }
  const handleSendBulk = () => {
    mutate(payload)
  }

  const csvSampleData = [
    ['74284eb5-114c-4152-89db-4ceab3cb4427'],
    ['B09b689e-8881-4b9f-99b0-766bc9326e68'],
    ['A22d7b46-cc9d-4ff5-a627-ee30024cd1a7'],
  ]

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={() => {
          setShowModal(!showModal)
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
                Download a
                <Span>
                  <CSVLink
                    data={csvSampleData}
                    filename={'Sample-reversal-sheet.csv'}
                    target="_blank"
                  >
                    {' '}
                    sample CSV template
                  </CSVLink>
                </Span>{' '}
                to see an example of the format required
              </Text>
            </div>
          </ModalHeader>
          <CSVReader
            onUploadAccepted={(results: any) => {
              let csvFile = results?.data?.flat(1)
              if (csvFile?.length > 0) {
                setCsvFile(csvFile)
              }
            }}
          >
            {({ getRootProps, acceptedFile }: any) => {
              return (
                <>
                  <Body>
                    <div className="dragdrop-input-wrapper" {...getRootProps()}>
                      <div className="icon-box">
                        <BulkUpload />
                      </div>
                      <Button
                        {...getRootProps()}
                        width="20%"
                        borderSize="1px"
                        onClick={() => {}}
                        borderColor={Color.alerzoBlue}
                        height="40px"
                        margin="0 0 2rem 0"
                        variant="transparent"
                        color={Color.alerzoBlue}
                      >
                        Add File
                      </Button>
                    </div>
                  </Body>
                  <Stack alignItems="center">
                    <Text align="center" padding="2rem 0" color="#001928cc">
                      {acceptedFile
                        ? acceptedFile.name
                        : 'or drag files to upload'}
                    </Text>
                  </Stack>
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
                        <UploadIcon
                          color={!csvFile || loading ? '#A1A8B7 ' : '#fff'}
                        />
                      </Button>
                    </Button.Group>
                  </Footer>
                </>
              )
            }}
          </CSVReader>
        </Container>
      </Modal>
      <SucccessReversalModal
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        setShowModal={setShowModal}
      />
    </>
  )
}

export default BulkReversalModal
