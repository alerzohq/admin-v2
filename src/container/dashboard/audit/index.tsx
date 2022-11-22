import React from 'react'
import { useQuery } from 'react-query'
import { FallBack, Jumbotron, Loader, Table } from '../../../components'
import { Container } from '../../../components/layout'
import { auditHeaderList } from '../../../data/table-headers'
import { getResource } from '../../../utils/apiRequest'

type Props = {}

const Audit = (props: Props) => {
  const getSessionsDetails = () => {
    return getResource('sessions')
  }

  const { isLoading, isError, data, refetch } = useQuery(
    'audit',
    getSessionsDetails
  )

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error title={'Failed to load sessions. '} refetch={refetch} />
    )
  } else if (data?.data?.length < 1) {
    component = (
      <FallBack title={'You have no sessions yet.'} refetch={refetch} />
    )
  } else {
    component = (
      <Table
        headerbgColor={'transparent'}
        tableName="audit"
        tableData={data.data}
        tableHeaders={auditHeaderList}
        hideDate
        setParams
      />
    )
  }
  return (
    <Container title="Audit Trail">
      <Jumbotron padding={'0'}>{component}</Jumbotron>
    </Container>
  )
}

export default Audit
