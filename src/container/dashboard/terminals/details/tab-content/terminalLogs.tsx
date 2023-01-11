import { Fragment, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import {
  AssignedTerminalIcon,
  AssignTerminalIcon,
  DiasbleTeminalIcon,
  ReassignTerminalIcon,
  UnassignedTerminalsIcon,
} from '../../../../../assets/icons'
import {
  FallBack,
  Filter,
  Jumbotron,
  Loader,
  Text,
} from '../../../../../components'
import { TimelineElement } from '../../../../../components/timeline'
import { filterValue } from '../../../../../data/filter-data'
import { optionsAllPlatform, options } from '../../../../../data/select-data'
import { getNewFilterResource } from '../../../../../utils/apiRequest'
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
  'Terminal was created by': <AssignTerminalIcon />,
  'Terminal was disabled': <UnassignedTerminalsIcon />,
  'Terminal was deactivated by': <DiasbleTeminalIcon />,
  'Terminal was activated by': <AssignedTerminalIcon />,
  'Terminal was re-assigned to': <ReassignTerminalIcon />,
  'Terminal was assigned to': <AssignTerminalIcon />,
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
        actions={data.data.map((log: Log, i: number, self: Log[]) => ({
          action: (
            <Text as="p">
              <Text as="p" weight="400" size="14px">
                {formatDate(log.createdAt, 'YYYY-MM-DD HH:mm:ss')}
              </Text>
              <Text as="p" weight="600" size="16px">
                {self[i].details[4]?.value.split(' ')[0]}{' '}
                {self[i].details[4]?.value.split(' ')[2]}
              </Text>
              <Text as="p" weight="400" size="14px">
                {log.details[4].value === 'Terminal was assigned to' ||
                log.details[4].value === 'Terminal was re-assigned to'
                  ? log.details
                      .slice(0)
                      .reverse()
                      .map((log, i, self) =>
                        !['userType', 'businessId'].includes(log.key) ? (
                          <>
                            {log.key === 'business' ? (
                              <>
                                <span
                                  className="tableLink"
                                  onClick={() => {
                                    navigate(
                                      `/dashboard/businesses/${
                                        self[i - 1]?.value
                                      }`
                                    )
                                  }}
                                >
                                  {log?.value}
                                </span>{' '}
                                by{' '}
                              </>
                            ) : (
                              <> {log?.value} </>
                            )}
                          </>
                        ) : null
                      )
                  : log.details
                      .slice(0)
                      .reverse()
                      .map((log) =>
                        !['userType', 'businessId', 'business'].includes(
                          log?.key
                        ) ? (
                          <> {log?.value} </>
                        ) : null
                      )}
              </Text>
            </Text>
          ),
          icon: (logIcon as any)[log.details[log.details.length - 1]?.value],
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
              placeholder: 'Status',
              values: options,
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
