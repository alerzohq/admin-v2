import { useState } from 'react'
import { useQuery } from 'react-query'
import {
  AssignedTerminalIcon,
  AssignTerminalIcon,
  DiasbleTeminalIcon,
  ReassignTerminalIcon,
} from '../../../../../assets/icons'
import { FallBack, Filter, Jumbotron } from '../../../../../components'
import { TimelineElement } from '../../../../../components/timeline'
import { filterValue } from '../../../../../data/filter-data'
import { getFilterResource, getResource } from '../../../../../utils/apiRequest'

const TerminalRequestLogs = ({ terminalId }: { terminalId?: string }) => {
  const [values, setValues] = useState(filterValue)
  console.log(terminalId)
  const getTerminalLog = () => {
    return getFilterResource(
      `activity/logs?category=terminal&entityId=${terminalId}`,
      {
        count: 10,
        pageNumber: 0,
        from: values.from,
        to: values.to,
        query: values.query,
        status: values.status,
      }
    )
  }
  const { data } = useQuery('terminal-logs', getTerminalLog)

  return (
    <Jumbotron padding={'.5rem 1rem'} direction={'column'}>
      <Filter
        setFilterValues={setValues}
        showFilters={{
          search: {
            placeholder: 'Search',
            type: 'text',
          },
          date: true,
          selects: [
            {
              placeholder: 'Status',
              values: [],
              value: '',
              onChange: () => {},
              query: 'status',
            },
          ],
        }}
      />
      {data?.data.length === 0 ? (
        <FallBack title="No data for this terminal" />
      ) : (
        <TimelineElement
          actions={[
            {
              action: 'sss',
              icon: <AssignTerminalIcon />,
            },
            { action: 'Login', icon: <AssignedTerminalIcon /> },
            { action: 'Login', icon: <DiasbleTeminalIcon /> },
            { action: 'Login', icon: <ReassignTerminalIcon /> },
          ]}
        />
      )}
    </Jumbotron>
  )
}

export default TerminalRequestLogs
