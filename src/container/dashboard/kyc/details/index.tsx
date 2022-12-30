import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { Jumbotron } from '../../../../components'
import { Container } from '../../../../components/layout'
import { TimelineElement } from '../../../../components/timeline'
import { getResource } from '../../../../utils/apiRequest'
import { formatDate } from '../../../../utils/formatValue'
import { KycContainer, KYCLogs } from '../styles/kyc.styles'
import { IStateProps } from '../type'
import { KYCDocuments } from './KYCDocuments'
import { KYCUser } from './KYCUser'

const KYCDetailContainer = () => {
  const location = useLocation()
  const state = location.state as IStateProps

  const getKYCLog = () => {
    return getResource(`activity/logs?category=kyc&entityId=${state.userId}`)
  }

  // pass stateId to useQuery func as params to avoid flicker
  const { data, isLoading, isError, refetch, error } = useQuery(
    'kyc-logs',
    () => getKYCLog()
  )

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
          <KYCUser state={state} />
          <KYCDocuments state={state} />
          <KYCLogs>
            <TimelineElement
              actions={data?.data.map((action: any) => ({
                action: (
                  <p
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <p style={{ fontWeight: 400, fontSize: '14px' }}>
                      {formatDate(action.createdAt, 'YYYY-MM-DD HH:mm:ss')}
                    </p>
                    <p>{action.subject}</p>
                  </p>
                ),
              }))}
            />
          </KYCLogs>
        </KycContainer>
      </Jumbotron>
    </Container>
  )
}

export default KYCDetailContainer
