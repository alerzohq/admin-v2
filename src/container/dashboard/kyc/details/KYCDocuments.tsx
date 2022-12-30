import React from 'react'
import { Text } from '../../../../components'
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
        <Text
          weight="600"
          size="14px"
          lineHeight="17px"
          color={Color.alerzoBlack}
          padding="6px 0"
          as="p"
        >
          ID Verification{' '}
          <span className="lightFont">{state.documents[1].label}</span>
        </Text>
        <ImageContainer>
          <img
            width={'100%'}
            height={'190px'}
            alt="front img"
            src={state.documents[3].value[0]}
          />
          <Text
            weight="400"
            size="14px"
            lineHeight="17px"
            color={Color.alerzoGray2}
            padding="6px 0"
            as="p"
            whiteSpace="nowrap"
          >
            FRONT VIEW
          </Text>
        </ImageContainer>
        <ImageContainer>
          <img
            width={'100%'}
            height={'190px'}
            alt="rear img"
            src={state.documents[3].value[1]}
          />
          <Text
            weight="400"
            size="14px"
            lineHeight="17px"
            color={Color.alerzoGray2}
            padding="6px 0"
            as="p"
            whiteSpace="nowrap"
          >
            REAR VIEW
          </Text>
        </ImageContainer>
      </IDVerificationDocs>
      <AddressVerificationDocs>
        <Text
          weight="600"
          size="14px"
          lineHeight="17px"
          color={Color.alerzoBlack}
          padding="6px 0"
        >
          Address Verification{' '}
          <span className="lightFont">{state.documents[5].label}</span>
        </Text>

        <img
          width={'100%'}
          height={'190px'}
          alt="rear img"
          src={state.documents[5].value}
        />
      </AddressVerificationDocs>
    </KycDocuments>
  )
}
