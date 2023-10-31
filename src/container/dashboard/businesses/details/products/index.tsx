import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import {
  FallBack,
  Filter,
  Jumbotron,
  Loader,
  Pagination,
} from '../../../../../components'
import { filterValue } from '../../../../../data/filter-data'
import { businessProductsHeader } from '../../../../../data/table-headers'
import { getNewFilterResource } from '../../../../../utils/apiRequest'
import { errorMessage } from '../../../../../utils/message'
import { FilterValueProps } from '../../../../../@types/global'
import { useAppContext } from '../../../../../context'
import { Action } from '../../../../../context/actions'
import CustomTableData from '../../../../../components/table/table-data/custom-table-data'
import TableHeader from '../../../../../components/table/table-headers'
import { DataTable } from '../../../../../components/table/styles/table.styles'
import CommissionModal from './modal/set-commission-modal' 
import DeactivateProductModal from './modal/deactivate-product-modal'
import ActivateProductModal from './modal/activate-product-modal'


const Products = (isB2B: any) => {
  const { businessId } = useParams()
  const [values, setValues] = useState(filterValue)
  const [product, setProduct] = useState<any>({})
  const [showModal, setShowModal] = useState(false)
  const { dispatch } = useAppContext()
  const [showDisableModal, setShowDisableModal] = useState(false)
  const [showEnableModal, setShowEnableModal] = useState(false)

  const navigate = useNavigate()
  // https://api.develop.alerzopay.com/v2/admin/business/:{{businessId}}/available-products?pageNumber=1&count=20
  const getBusinessProducts = (filterValue: FilterValueProps) => {
    return getNewFilterResource(
      `business/${businessId}/available-products`,
      filterValue,
      false
    )
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

  const handleSetCommission = (item: Record<string, string>) => {
    setShowModal(true)
    setProduct({ ...item, businessId, productSlug: item?.slug })
  }

  const handleManageProduct = (item: Record<string, string>) => {
    setProduct({ ...item, businessId, productSlug: item?.slug })
    if (item?.disabled) {
      setShowEnableModal(true)
    } else {
      setShowDisableModal(true)
    }

    // setShowModal(true)
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
    component = <FallBack title={'You have no products yet. '} />
  } else {
    component = (
      <DataTable bgColor="transparent" layout="fixed">
        <TableHeader headers={businessProductsHeader} />
        <CustomTableData
          name="business-products"
          tableData={data?.data}
          handleChange={handleSetCommission}
          handleOnClickSecondActionBtn={handleManageProduct}
          actionBtn={true}
          dateFormat="YYYY-MM-DD HH:mm:ss"
          handleRouthPath={handleRoute}
          showSecondBtn
          secondActionBtnText={item => item?.disabled ? 'Enable Product' : 'Disable Product'}
        />
      </DataTable>
    )
  }

  return (
    <>
      <DeactivateProductModal
        businessId={businessId}
        productName={product?.name}
        productSlug={product?.productSlug}
        setShowModal={setShowDisableModal}
        showModal={showDisableModal}
      />
      
      <ActivateProductModal
        businessId={businessId}
        productName={product?.name}
        productSlug={product?.productSlug}
        setShowModal={setShowEnableModal}
        showModal={showEnableModal}
      />
      
      <Jumbotron padding={'.5rem 1rem'} direction={'column'} width="auto">
        <Filter
          isFetching={isFetching}
          showFilters={{
            search: {
              placeholder: 'Search',
              type: 'text',
            },
            date: true,
            // selects: [
            //   {
            //     placeholder: 'Status',
            //     values: [],
            //     value: '',
            //     onChange: () => {},
            //     query: 'status',
            //   },
            // ],
          }}
        />

        {component}
      </Jumbotron>
      {data?.data && <Pagination data={data} setPageNumber={setValues} />}
      <CommissionModal
        showModal={showModal}
        setShowModal={setShowModal}
        product={product}
      />
    </>
  )
}

export default Products
