import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { Button, Jumbotron, Text } from '../../../../components'
import { Container } from '../../../../components/layout'
import { getResource } from '../../../../utils/apiRequest'
import { formatDate } from '../../../../utils/formatValue'
import {
  AddressVerificationDocs,
  IDVerificationDocs,
  ImageContainer,
  KycContainer,
  KycDocuments,
  KycUser,
  KycUserDetails,
  KycUserImg,
} from '../styles/kyc.styles'
import { IStateProps } from '../type'
import { Color } from '../../../../assets/theme'

const KYCDetailContainer = () => {
  const location = useLocation()
  const state = location.state as IStateProps

  const getKYCLog = () => {
    return getResource(
      `activity/logs?category=kyc&entityId=8877d524-a70a-4282-9b13-7e6deb0de161`
    )
  }

  // pass stateId to useQuery func as params to avoid flicker
  const { data, isLoading, isError, refetch, error } = useQuery(
    'kyc-logs',
    getKYCLog
  )

  //view for user info and document view should be split into two different components
  // Use Object-fit on images to advoid image been stretch
  return (
    <Container
      showFilters={false}
      isFetching={false}
      title={'Account Upgrade Request'}
      withParams={true}
      routePath={'/dashboard/kyc'}
    >
      <Jumbotron padding={'0'} margin={'0'}>
        <KycContainer>
          <KycUser>
            <KycUserImg>
              <img
                width={'190px'}
                height={'190px'}
                alt="selfie"
                src={state.documents[0].value}
              />
              <Text
                align="center"
                weight="700"
                size="18px"
                as="p"
                justifyContent="center"
              >
                {state.fullName}
              </Text>
            </KycUserImg>
            <KycUserDetails>
              <div>
                <Text
                  weight="400"
                  size="14px"
                  lineHeight="17px"
                  color={Color.alerzoGray2}
                  padding="6px 0"
                >
                  Verification ID
                </Text>
                <Text
                  align="center"
                  weight="600"
                  size="16px"
                  as="p"
                  justifyContent="start"
                  color={Color.alerzoDarkGray}
                >
                  {state.verificationId}
                </Text>
              </div>
              <div>
                <Text
                  weight="400"
                  size="14px"
                  lineHeight="17px"
                  color={Color.alerzoGray2}
                  padding="6px 0"
                >
                  Application Date
                </Text>
                <Text
                  align="center"
                  weight="600"
                  size="16px"
                  as="p"
                  justifyContent="start"
                  color={Color.alerzoDarkGray}
                >
                  {formatDate(state.createdAt, 'YYYY-MM-DD HH:mm:ss')}
                </Text>
              </div>
              <div>
                <Text
                  weight="400"
                  size="14px"
                  lineHeight="17px"
                  color={Color.alerzoGray2}
                  padding="6px 0"
                >
                  Status
                </Text>

                {/* Make logic below a util function */}
                <p
                  className={
                    state.status === 'approved'
                      ? 'success'
                      : state.status === 'processing'
                      ? 'unassigned'
                      : state.status === 'failed' || state.status === 'Inactive'
                      ? 'failed'
                      : state.status
                  }
                >
                  {state.status}
                </p>
              </div>
            </KycUserDetails>
            <Button onClick={() => console.log('Provide Action')}>
              Provide Action
            </Button>
          </KycUser>
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
          <div></div>
        </KycContainer>
      </Jumbotron>
    </Container>
  )
}

export default KYCDetailContainer
