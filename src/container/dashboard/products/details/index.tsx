import { useLocation } from 'react-router-dom'
import { getResource } from '../../../../utils/apiRequest'
import { useQuery } from 'react-query'
import { Container } from '../../../../components/layout'
import DetailsContent from '../../widget/tabs/tab-content-details'
import { productHelper } from '../../../../data/product-data'
import {
  FallBack,
  Jumbotron,
  Loader,
  Table,
  Text,
} from '../../../../components'
import { productBillersHeaderList } from '../../../../data/table-headers'
import { Color } from '../../../../assets/theme'

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
  const { isLoading, isRefetching, isError, refetch, data } = useQuery(
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
        notClickable
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
      <Text
        as={'p'}
        padding={'0'}
        color={Color.alerzoBlack}
        size="14px"
        textAlign="left"
        whiteSpace="nowrap"
        margin="1.875rem 0 1rem 0"
        weight="600"
        align={'center'}
      >
        Biller Information
      </Text>
      <Jumbotron padding={'0'} direction="column" mt="0">
        {component}
      </Jumbotron>
    </Container>
  )
}
export default ProductDetailsContainer
