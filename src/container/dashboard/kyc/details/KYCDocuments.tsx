import React from 'react'
import { Stack, Text } from '../../../../components'
import {
  AddressVerificationDocs,
  IDVerificationDocs,
  ImageContainer,
  KycDocuments,
} from '../styles/kyc.styles'
import { Color } from '../../../../assets/theme'
import { IStateProps } from '../type'

export const KYCDocuments = ({ state }: { state: IStateProps }) => {
  return (
    <KycDocuments>
      <IDVerificationDocs>
        <Stack direction="row" gap=".5rem" padding=".5rem 0">
          <Text weight="600" lineHeight="17px" color={Color.alerzoBlack}>
            ID Verification
          </Text>
          <Text weight="600" lineHeight="17px" color={Color.alerzoBlack}>
            <span className="lightFont">{state?.documents?.[1]?.label}</span>
          </Text>
        </Stack>

        <ImageContainer>
          <img
            width="100%"
            height="190px"
            alt="front img"
            src={state.documents[3].value[0]}
          />
          <Text
            weight="400"
            lineHeight="17px"
            color={Color.alerzoGray2}
            padding="6px 0"
            as="p"
            whiteSpace="nowrap"
          >
            FRONT VIEW
          </Text>
        </ImageContainer>
        {state.documents[3].value[1] && (
          <ImageContainer>
            <img
              width="100%"
              height="190px"
              alt="rear img"
              src={state.documents[3].value[1]}
            />
            <Text
              weight="400"
              lineHeight="17px"
              color={Color.alerzoGray2}
              padding="6px 0"
              as="p"
              whiteSpace="nowrap"
            >
              REAR VIEW
            </Text>
          </ImageContainer>
        )}
      </IDVerificationDocs>
      <AddressVerificationDocs>
        <Stack direction="row" gap=".5rem" padding=".5rem 0">
          <Text weight="600" lineHeight="17px" color={Color.alerzoBlack}>
            Address Verification
          </Text>
          <Text weight="600" lineHeight="17px" color={Color.alerzoBlack}>
            <span className="lightFont">{state.documents[5].label}</span>
          </Text>
        </Stack>
        <img
          width="100%"
          height="190px"
          alt="rear img"
          src={state.documents[5].value}
        />
      </AddressVerificationDocs>
    </KycDocuments>
  )
}
