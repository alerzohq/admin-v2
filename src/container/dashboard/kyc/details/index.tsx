import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { Button, Jumbotron } from '../../../../components'
import { Container } from '../../../../components/layout'
import { getResource } from '../../../../utils/apiRequest'
import { formatDate } from '../../../../utils/formatValue'
import { KycContainer } from '../styles/kyc.styles'
import { IStateProps } from '../type'

type Props = {}

const KYCDetailContainer = (props: Props) => {
  const location = useLocation()
  const state = location.state as IStateProps

  const getKYCLog = () => {
    return getResource(`activity/logs?category=kyc&entityId=${state.id}`)
  }

  // pass stateId to useQuery func as params to avoid flicker
  const {data, isLoading, isError, refetch, error } = useQuery(
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

          {/* Replace div with Stack component , p with Text component*/}
          <div>
            <div>
              <img
                width={'190px'}
                height={'190px'}
                alt="selfie"
                style={{
                  borderRadius: '50%',
                  border: '1px solid #E8EBEE',
                }}
                src={state.documents[0].value}
              />
              <p>{state.fullName}</p>
            </div>
            <div>
              <p>Verification ID</p>
              <p>{state.verificationId}</p>
            </div>
            <div>
              <p>Application Date</p>
              <p>{formatDate(state.createdAt, 'YYYY-MM-DD HH:mm:ss')}</p>
            </div>
            <div>
              <p>Status</p>

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
            <Button onClick={() => console.log('Provide Action')}>
              Provide Action
            </Button>
          </div>
          <div>
            <div>
              <p>
                ID Verification{' '}
                <span className="lightFont">{state.documents[1].label}</span>
              </p>
              <img
                width={'100%'}
                height={'190px'}
                alt="front img"
                src={state.documents[3].value[0]}
              />
              <img
                width={'100%'}
                height={'190px'}
                alt="rear img"
                src={state.documents[3].value[1]}
              />
            </div>
            <div>
              <p>
                Address Verification
                <span className="lightFont">{state.documents[5].label}</span>
              </p>

              <img
                width={'100%'}
                height={'190px'}
                alt="rear img"
                src={state.documents[5].value}
              />
            </div>
          </div>
          <div></div>
        </KycContainer>
      </Jumbotron>
    </Container>
  )
}

export default KYCDetailContainer
