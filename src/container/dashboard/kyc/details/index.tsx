import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { Jumbotron } from '../../../../components'
import { Container } from '../../../../components/layout'
import { getResource } from '../../../../utils/apiRequest'
import { KycContainer } from '../styles/kyc.styles'
import { IStateProps } from '../type'
import { KYCDocuments } from './KYCDocuments'
import { KYCUser } from './KYCUser'

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
          <div></div>
        </KycContainer>
      </Jumbotron>
    </Container>
  )
}

export default KYCDetailContainer
