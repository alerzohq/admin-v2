import { Fragment, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { AssignTerminalIcon } from '../../../../../assets/icons'
import { FallBack, Filter, Jumbotron, Loader } from '../../../../../components'
import { TimelineElement } from '../../../../../components/timeline'
import { filterValue } from '../../../../../data/filter-data'
import {
  getNewFilterResource,
  getResource,
} from '../../../../../utils/apiRequest'
import { formatDate } from '../../../../../utils/formatValue'
import { errorMessage } from '../../../../../utils/message'

export interface Detail {
  key: string
  label: string
  value: string
  internal: boolean
}

interface Log {
  id: string
  entityId: string
  category: string
  subject: string
  details: Detail[]
  createdAt: Date
  updatedAt: Date
}
let logIcon = {
  'Terminal Activated': {
    details: 'Terminal was activated by ',
    icon: <AssignTerminalIcon />,
  },
}
const TerminalLogs = ({ terminalId }: { terminalId?: string }) => {
  const [values, setValues] = useState({ ...filterValue, count: 50 })
  const navigate = useNavigate()
  const getTerminalLog = () => {
    return getNewFilterResource(`activity/logs`, {
      ...values,
      entityId: terminalId,
      category: 'terminal',
    })
  }
  const { data, isLoading, isError, refetch, error } = useQuery(
    ['terminal-logs', values],
    getTerminalLog
  )

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={`${errorMessage(error)}`} />
    )
  } else if (data?.data?.length < 1) {
    component = <FallBack title={'You have no logs yet.'} refetch={refetch} />
  } else {
    component = (
      <TimelineElement
        borderColor="#0077FF"
        borderType="solid"
        actions={data.data.map((log: Log) => ({
          action: (
            <p
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <p style={{ fontWeight: 400, fontSize: '14px' }}>
                {formatDate(log.createdAt, 'YYYY-MM-DD HH:mm:ss')}
              </p>
              <p style={{ fontWeight: 600, fontSize: '16px' }}>{log.subject}</p>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>
                {[
                  ...[...log.details].reverse().map((log, i, self) =>
                    !['userType', 'businessId'].includes(log.key) ? (
                      log.key === 'business' ? (
                        <>
                          {' '}
                          <span
                            className="tableLink"
                            onClick={() => {
                              navigate(
                                `/dashboard/businesses/${self[i - 1].value}`
                              )
                            }}
                          >
                            {log.value}{' '}
                          </span>
                          by{' '}
                        </>
                      ) : (
                        `${log.value} `
                      )
                    ) : (
                      ''
                    )
                  ),
                ]}
              </p>
            </p>
          ),
          icon: (logIcon as any)[log.subject].icon,
        }))}
      />
    )
  }

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
              placeholder: 'All Platform',
              values: [],
              value: '',
              onChange: () => {},
              query: 'allPlatform',
            },
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
      {component}
    </Jumbotron>
  )
}

export default TerminalLogs
