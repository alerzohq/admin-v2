import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FallBack,
  Jumbotron,
  Loader,
  Pagination,
  Table,
} from '../../../components'
import { Container } from '../../../components/layout'
import { getNewFilterResource, getResource } from '../../../utils/apiRequest'
import CardWidget from '../widget/card'
import { useQuery } from 'react-query'
import { billerHeaderList } from '../../../data/table-headers'
import { FilterValueProps } from '../../../@types/global'
import { filterValue } from '../../../data/filter-data'
import { errorMessage } from '../../../utils/message'
import { billerIcons, billerLabels, billerMockData } from '../../../data/biller-data'

const BillerContainer = () => {
const navigate = useNavigate()
  const [values, setValues] = useState(filterValue)

  const getBusinesses = (filterValue: FilterValueProps) => {
    return getNewFilterResource(`businesses`, filterValue)
  }

  const getTranStats = () => {
    return getResource(`businesses/statistics`)
  }
  const { isLoading: loading, data: Stats } = useQuery(
    'business-stats',
    getTranStats
  )
  const Statistics = Stats?.data

  const { isLoading, data, isError, isFetching, refetch, error } = useQuery(
    ['businesses', values],
    () => getBusinesses(values),
    { keepPreviousData: true }
  )

const handleManageBillers=(biller:Record<string,string>) =>{
    navigate(`${biller?.id}`)
}

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack
        error
        refetch={refetch}
        title={`${errorMessage(error as ErrorType)}`}
      />
    )
  } else if (data?.data?.length < 1) {
    component = <FallBack title={'No Business Found.'} refetch={refetch} />
  } else {
    component = (
      <Table
        tableName="billers"
        tableData={billerMockData.data}
        tableHeaders={billerHeaderList}
        dateFormat="YYYY-MM-DD HH:mm:ss"
        actionBtnLabel='Manage Biller'
        handleAction={handleManageBillers}
      />
    )
  }
  return (
    <Container
      showFilters={{
        search: {
          placeholder: 'Search Biller...',
        },
        selects: [
          {
            searchQuery: 'isLive',
            placeholder: 'Status',
            values: [
              { label: 'Active', value: true },
              { label: 'Inactive', value: false },
            ],
            value: '',
          },
        ],
      }}
      title="Billers"
      setFilterValues={setValues}
      isFetching={isFetching}
    >
      <CardWidget
        stats={Statistics}
        loading={loading}
        labels={billerLabels}
        icons={billerIcons}
      />
      <Jumbotron padding={'0'}>{component}</Jumbotron>

      <Pagination data={data} setPageNumber={setValues} />
    </Container>
  )
}

export default BillerContainer
