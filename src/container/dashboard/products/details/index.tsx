import { useLocation } from 'react-router-dom'
import { getResource } from '../../../../utils/apiRequest'
import { useQuery } from 'react-query'
import { Container } from '../../../../components/layout'
import DetailsContent from '../../widget/tabs/tab-content-details'
import { productHelper } from '../../../../data/product-data'
import {
  FallBack,
  Filter,
  Jumbotron,
  Loader,
  Table,
} from '../../../../components'
import { productBillersHeaderList } from '../../../../data/table-headers'

interface CustomizedState {
  detail: any
}
const ProductDetailsContainer = () => {
  const location = useLocation()
  const state = location.state as CustomizedState
  const { detail } = state
  const getProductBillers = () => {
    return getResource(`products/${detail?.slug}/billers`)
  }
  const { isLoading, isRefetching, isError, refetch, error, data } = useQuery(
    'billers',
    getProductBillers
  )
  const resp = data?.data?.[0]

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack
        error
        title={'Failed to load transaction history.'}
        refetch={refetch}
      />
    )
  } else if (data?.data?.length < 1) {
    component = (
      <FallBack title={'You have no transaction yet.'} refetch={refetch} />
    )
  } else {
    component = (
      <Table
        tableName="product-billers"
        tableData={data?.data}
        tableHeaders={productBillersHeaderList}
        dateFormat="YYYY-MM-DD HH:mm:ss"
        withSlug
      />
    )
  }

  return (
    <Container
      showFilters={false}
      isFetching={isRefetching}
      title="Product Information"
      routePath="/dashboard/products"
    >
      <DetailsContent
        resolvedData={productHelper({ ...resp, name: detail?.slug })!}
      />
      <Jumbotron padding={'.5rem .5rem'} direction="column">
        <Filter
          showFilters={{
            search: {
              placeholder: 'Search',
              type: 'text',
            },
            date: false,
            selects: [],
          }}
        />
        {component}
      </Jumbotron>
    </Container>
  )
}
export default ProductDetailsContainer
