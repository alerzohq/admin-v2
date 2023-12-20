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
import { errorMessage, unauthorizedMessage } from '../../../utils/message'
import {
  billerIcons,
  billerLabels,
  billerStats,
} from '../../../data/biller-data'
import AllPermissions from '../../../configs/access-control'
import { toast } from 'react-hot-toast'

const BillerContainer = () => {
  const navigate = useNavigate()
  const { viewBillerDetailAccess } = AllPermissions()
  const [values, setValues] = useState(filterValue)

  const getBillers = (filterValue: FilterValueProps) => {
    return getNewFilterResource(`billers/commissions`, filterValue)
  }

  const getBillerStats = () => {
    return getResource(`billers/statistics`)
  }
  const { isLoading: loading, data: Stats } = useQuery(
    'biller-stats',
    getBillerStats
  )
  const Statistics = billerStats(Stats?.data)

  const { isLoading, data, isError, isFetching, refetch, error } = useQuery(
    ['billers-data', values],
    () => getBillers(values),
    { keepPreviousData: true }
  )

  const handleManageBillers = (biller: Record<string, string>) => {
    if (!viewBillerDetailAccess) {
      return toast.error(unauthorizedMessage)
    } else {
      navigate(`${biller?.slug}`)
    }
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
  } else if (data?.data?.billerProductCommissions?.length < 1) {
    component = <FallBack title={'No Biller Found.'} refetch={refetch} />
  } else {
    component = (
      <Table
        tableName="billers"
        tableData={data?.data?.billerProductCommissions}
        tableHeaders={billerHeaderList}
        dateFormat="YYYY-MM-DD HH:mm:ss"
        actionBtnLabel="Manage Biller"
        handleAction={handleManageBillers}
        notClickable
      />
    )
  }
  return (
    <Container
      showFilters={{
        search: {
          placeholder: 'Search Biller...',
        },
        date: true,
        selects: [
          {
            searchQuery: 'disabled',
            placeholder: 'Status',
            values: [
              { label: 'Active', value: false },
              { label: 'Inactive', value: true },
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
        statistics={Statistics}
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
