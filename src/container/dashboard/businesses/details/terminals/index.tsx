import { useState } from 'react'
import { useQuery } from 'react-query'
import {
  Loader,
  FallBack,
  Table,
  Jumbotron,
  Pagination,
  Filter,
} from '../../../../../components'
import { filterValue } from '../../../../../data/filter-data'
import { businessTerminalHeader } from '../../../../../data/table-headers'
import { filterProps } from '../../../../../@types'
import { getNewFilterResource } from '../../../../../utils/apiRequest'
import { errorMessage } from '../../../../../utils/message'

const BusinessTerminalContainer = ({ businessId }: { businessId: string }) => {
  const [values, setValues] = useState(filterValue)

  const getBusinesses = (filterValue: filterProps) => {
    return getNewFilterResource(`terminals`, filterValue)
  }

  const { isLoading, data, isError, refetch, error } = useQuery(
    ['business-terminals', values],
    () => getBusinesses({ ...values, userId: businessId }),
    { keepPreviousData: true }
  )

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={`${errorMessage(error)}`} />
    )
  } else if (data?.data?.length < 1) {
    component = (
      <FallBack
        title={'This business does not have a terminal.'}
        refetch={refetch}
      />
    )
  } else {
    component = (
      <Table
        tableName="business-terminals"
        tableData={data?.data}
        tableHeaders={businessTerminalHeader}
        dateFormat="YYYY-MM-DD HH:mm:ss"
      />
    )
  }
  return (
    <>
      <Jumbotron padding={'.5rem 1rem'} direction={'column'} width="auto">
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
                placeholder: 'Variant',
                values: [
                  {
                    label: 'A75',
                    value: 'A75'
                  },
                  {
                    label: 'VM30',
                    value: 'VM30'
                  }
                ],
                query: 'variant',
                value: '',
                onChange: () => {},
              },
            ],
            buttons: [
              {
                label: 'Map New Terminal',
                onClick: () => {},
                buttonClass: 'add-button',
              },
            ],
          }}
        />

        {component}
      </Jumbotron>

      {data?.data && <Pagination data={data} setPageNumber={setValues} />}
    </>
    // <Container
    //   showFilters={{
    //     search: {
    //       placeholder: 'Search...',
    //     },
    //     date: true,
    //     selects: [
    //       {
    //         searchQuery: 'isLive',
    //         placeholder: 'Status',
    //         values: [
    //           { label: 'Active', value: true },
    //           { label: 'Inactive', value: false },
    //         ],
    //         value: '',
    //       },
    //     ],
    //   }}
    //   title="Business Information"
    //   setFilterValues={setValues}

    // >
    //   <Jumbotron padding={'0'}>{component}</Jumbotron>

    //   <Pagination data={data} setPageNumber={setValues} />
    // </Container>
  )
}

export default BusinessTerminalContainer
