import React from 'react'
import { Container } from '../../../../components/layout'
import TabsContainer from '../../../../container/dashboard/transactions/details'

const TransactionDetails = () => {
  return (
    <Container title={'Transaction Details'}>
     <TabsContainer />
    </Container>
  )
}

export default TransactionDetails