import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { FallBack, Filter, Jumbotron, Loader, Table } from '../../../components'
import { Container } from '../../../components/layout'
import {
  DataTable,
  TableWrapper,
} from '../../../components/table/styles/table.styles'
import CustomTableData from '../../../components/table/table-data/custom-table-data'
import TableHeader from '../../../components/table/table-headers'
import { filterValue } from '../../../data/filter-data'
import { productsHeaderList } from '../../../data/table-headers'
import { useMutation } from '../../../hooks'
import { getResource } from '../../../utils/apiRequest'
import { mapBillers } from '../../../utils/formatValue'

const ProductsContainer = () => {
  const [slug, setSlug] = useState()
  const [newBiller, setNewBiller] = useState<string>()
  const location = useLocation()
  const getProducts = () => {
    return getResource('products')
  }
  const stateValue: any = location.state
  const { isLoading, isError, data, refetch } = useQuery(
    'products',
    getProducts
  )
  const [
    changeBiller,
    { data: updatedData, error: updateError, loading: loadingUpdate },
  ] = useMutation({
    pathUrl: `products/${slug}/set-biller`,
    payload: { billerSlug: newBiller },
    methodType: 'post',
  })
  console.log(updatedData, loadingUpdate, "dara")
  useEffect(() => {
    if (newBiller !== null && newBiller !== undefined) {
      changeBiller()
      setNewBiller(undefined)
    }
  }, [newBiller])
  const getBillers = () => {
    return getResource(`products/${slug}/billers`)
  }
  const [values, setValues] = useState(filterValue)
  const [options, setOptions] = useState([{ label: '', value: '' }])
  useEffect(() => {
    setSlug(stateValue?.selectData?.slug)
  }, [stateValue?.selectData])
  const {
    isLoading: loadingBillers,
    isRefetching,
    data: billers,
  } = useQuery(`queryKey${slug}`, getBillers, {
    enabled: !!slug,
  })
  useEffect(() => {
    setOptions(mapBillers(billers?.data))
  }, [billers])
  useEffect(() => {
  if(updatedData?.status){
    refetch()
  }
  }, [updatedData])
  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={'Failed to load products. '} />
    )
  } else if (data?.data?.length < 1) {
    component = <FallBack title={'No products list available. '} />
  } else {
    component = (
      <TableWrapper>
        <DataTable bgColor={'transparent'}>
          <TableHeader headers={productsHeaderList} />
          <CustomTableData
            name="products"
            selectIndex={2}
            tableData={data?.data}
            handleSelectChange={setNewBiller}
            options={
              loadingBillers || isRefetching
                ? [{ label: 'Loading...', value: '', disabled: true }]
                : options
            }
          />
        </DataTable>
      </TableWrapper>
    )
  }
  return (
    <Container
      isFetching={loadingUpdate || isRefetching}
      showFilters={false}
      title="Product"
      setFilterValues={setValues}
    >
      <Jumbotron padding={'0 1rem'} direction={'column'}>
        <Filter
          showFilters={{
            search: {
              placeholder: 'Search',
              type: 'text',
            },
            date: false,
            selects: [],
            buttons: [
              {
                label: 'Add New Products',
                onClick: () => {},
                buttonClass: 'add-button',
              },
            ],
          }}
        />
        {component}
      </Jumbotron>
    </Container>
  )
}
export default ProductsContainer
