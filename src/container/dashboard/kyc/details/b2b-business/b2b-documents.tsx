import { Fragment, useState } from 'react'

import { Color } from '../../../../../assets/theme'
import { Stack, Text } from '../../../../../components'
import { checkPdfUrl } from '../../../../../utils/formatValue'
import { DocFile } from './doc-file'

const B2BDocuments = ({ state }: any) => {
  const [show, setShow] = useState<number | null>()
  let documentNumber = state?.documents?.find(
    (v: Record<string, string>) => v?.key === 'documentNumber'
  )
  let businessCAC = state?.documents?.find((v: any) => v?.key === 'businessCAC')
  let documentPhotos = state?.documents?.find(
    (v: Record<string, string>) => v?.key === 'documentPhotos'
  )
  const isPdf = checkPdfUrl(businessCAC?.value)

  const toggle = (index: number) => {
    if (show === index) {
      return setShow(null)
    }
    setShow(index)
  }

  const documents = [
    {
      docType: 'Business CAC',
      documentNumber: documentNumber?.value,
      file: businessCAC?.value,
    },
    {
      docType: 'Utility Bill',
      documentNumber: documentNumber?.value,
      file: documentPhotos?.value,
    },
  ]

  return (
    <Stack width="auto" border={`0 1px solid ${Color.alerzoGrayBorder}`}>
      <Stack
        marginTop="1rem"
        borderRadius="10px"
        width="auto"
        boxShadow="0px 5px 8px rgba(193, 202, 207, 0.3)"
      >
        {documents?.map((document, index) => (
          <Fragment key={index}>
            <Stack
              direction="row"
              justifyContent="space-between"
              bgColor="rgba(199, 225, 255, 0.3)"
              borderRadius="10px 10px 0 0"
              width="auto"
              boxShadow="0px 5px 8px rgba(193, 202, 207, 0.3)"
            >
              <Stack justifyContent="center" padding=" .5rem" width="50%">
                <Text
                  as="p"
                  size="14px"
                  padding="0"
                  color={Color.alerzoGrayishBlue2}
                >
                  Doc. Type:
                  <strong>{document?.docType}</strong>
                </Text>
              </Stack>
              <Stack
                justifyContent="center"
                borderLeft="1px solid #D6E9FF"
                padding=".5rem"
                width="50%"
              >
                <Text as="p" size="14px" color={Color.alerzoGrayishBlue2}>
                  Doc. Number:{' '}
                  <strong> {document?.documentNumber ?? 'N/A'}</strong>
                </Text>
              </Stack>
            </Stack>
            <Stack
              height={show === index ? 'auto' : '150px'}
              transition="height 1s ease-in-out"
              overflow="hidden"
            >
              <Stack pt="1rem">
                <DocFile
                  doc={document?.file}
                  docType={document?.docType}
                  isPdf={isPdf}
                />
              </Stack>
            </Stack>
            <Stack
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              padding=".5rem 0"
              cursor="pointer"
              onClick={() => toggle(index)}
            >
              <Text as="h4" color={Color.alerzoBlue}>
                {show === index ? 'Show Less' : 'Show More'}
              </Text>
            </Stack>
          </Fragment>
        ))}
      </Stack>
    </Stack>
  )
}

export default B2BDocuments
