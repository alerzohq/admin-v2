import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import {
  FallBack,
  Filter,
  Jumbotron,
  Loader,
  Pagination,
  Table,
} from '../../../../../components'
import { filterValue } from '../../../../../data/filter-data'
import { businessProductsHeader } from '../../../../../data/table-headers'
import { getNewFilterResource } from '../../../../../utils/apiRequest'
import { errorMessage } from '../../../../../utils/message'
import { filterProps } from '../../../../../@types'
import { useAppContext } from '../../../../../context'
import { Action } from '../../../../../context/actions'

const Products = (isB2B: any) => {
  const [values, setValues] = useState(filterValue)
  const { dispatch } = useAppContext()

  const { businessId } = useParams()

  const navigate = useNavigate()

  const getBusinessProducts = (filterValue: filterProps) => {
    return getNewFilterResource(`business/${businessId}/products`, filterValue, false)
  }

  const { isLoading, isFetching, data, isError, refetch, error } = useQuery(
    [`business-products`, values],
    () => getBusinessProducts(values),
    { keepPreviousData: true }
  )

  useEffect(() => {
    dispatch({
      type: Action.IS_FETCHING,
      payload: isFetching,
    })
  }, [isFetching, dispatch])

  const handleRoute = (item: { [key: string]: any } | undefined) => {
    if (item?.productSlug) {
      navigate(`${item?.productSlug}`, { state: { item, isB2B } })
    }
  }

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={`${errorMessage(error)}`} />
    )
  } else if (data?.data?.length < 1) {
    component = <FallBack title={'You have no business history yet. '} />
  } else {
    component = (
      <Table
        headerbgColor={'transparent'}
        tableName="business-products"
        tableData={data?.data}
        tableHeaders={businessProductsHeader}
        dateFormat="YYYY-MM-DD HH:mm:ss"
        handleRouthPath={handleRoute}
      />
    )
  }

  return (
    <>
      <Jumbotron padding={'.5rem 1rem'} direction={'column'} width="auto">
        <Filter
          isFetching={isFetching}
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

        {component}
      </Jumbotron>

      {data?.data && <Pagination data={data} setPageNumber={setValues} />}
    </>
  )
}

export default Products
