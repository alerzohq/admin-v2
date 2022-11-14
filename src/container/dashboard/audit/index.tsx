import React from 'react'
import { Jumbotron, Table } from '../../../components'
import { Container } from '../../../components/layout'
import { auditHeaderList } from '../../../data/table-headers'

type Props = {}

const Audit = (props: Props) => {
  let component = (
    <Table
      headerbgColor={'transparent'}
      tableName="audit"
      tableData={[
        {
          username: 'Oluwatosin Fadina',
          role: 'admin',
          sessionStartedAt: 1667423818278,
          sessionEndedAt: 1667423810000,
        },
      ]}
      tableHeaders={auditHeaderList}
      hideDate
      setParams
    />
  )

  return (
    <Container title="Audit Trail">
      <Jumbotron padding={'0'}>{component}</Jumbotron>
    </Container>
  )
}

export default Audit
