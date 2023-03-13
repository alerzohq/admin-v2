import React from 'react'
import { Color } from '../../../../../assets/theme'
import { Stack, Text } from '../../../../../components'

const B2BDocuments = ({ state }: any) => {
  console.log({ state })
  let documentNumber = state?.documents?.find(
    (v: any) => v?.key === 'documentNumber'
  )
  let businessCAC = state?.documents?.find((v: any) => v?.key === 'businessCAC')
  let documentPhotos = state?.documents?.find(
    (v: any) => v?.key === 'documentPhotos'
  )
  return (
    <Stack
      width="auto"
      borderLeft="1px solid #E8EBEE"
      borderRight="1px solid #E8EBEE"
    >
      <Stack borderBottom="1px solid #E8EBEE" padding="1rem 0">
        <Stack
          direction="row"
          justifyContent="space-between"
          bgColor="rgba(199, 225, 255, 0.3)"
          padding="0 1rem"
          borderRadius="8px"
          width="auto"
        >
          <Stack justifyContent="center" padding=".5rem" width="50%">
            <Text as="p" padding="0" size="14px" color="#475E80">
              Doc. Type: <strong> Business CAC</strong>
            </Text>
          </Stack>
          <Stack
            justifyContent="center"
            borderLeft="1px solid #D6E9FF"
            padding=".5rem"
            width="50%"
          >
            <Text as="p" color="#475E80" size="14px">
              Doc. Number: <strong>{documentNumber?.value ?? 'N/A'}</strong>
            </Text>
          </Stack>
        </Stack>
        <Stack pt="1rem">
          <img width="100%" alt="business-CAC" src={businessCAC?.value} />
        </Stack>
      </Stack>
      <Stack padding="1rem 0">
        <Stack
          direction="row"
          justifyContent="space-between"
          bgColor="rgba(199, 225, 255, 0.3)"
          padding="0 1rem"
          borderRadius="8px"
          width="auto"
        >
          <Stack justifyContent="center" padding=".5rem" width="50%">
            <Text as="p" size="14px" padding="0" color="#475E80">
              Doc. Type: <strong> Utility Bill</strong>
            </Text>
          </Stack>
          <Stack
            justifyContent="center"
            borderLeft="1px solid #D6E9FF"
            padding=".5rem"
            width="50%"
          >
            <Text as="p" size="14px" color={Color.alerzoGrayishBlue2}>
              Doc. Number: <strong>{documentNumber?.value ?? 'N/A'}</strong>
            </Text>
          </Stack>
        </Stack>
        <Stack pt="1rem">
          {documentPhotos?.value?.map((value: string, i: number) => (
            <Stack key={i} padding=".5rem 0">
              <img width="100%" alt="document-photos" src={value} />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default B2BDocuments
