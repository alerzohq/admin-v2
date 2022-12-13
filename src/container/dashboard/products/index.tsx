import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { FallBack, Filter, Jumbotron, Loader } from '../../../components'
import { Container } from '../../../components/layout'
import {
  DataTable,
  TableWrapper,
} from '../../../components/table/styles/table.styles'
import CustomTableData from '../../../components/table/table-data/custom-table-data'
import TableHeader from '../../../components/table/table-headers'
import { filterValue } from '../../../data/filter-data'
import { productsHeaderList } from '../../../data/table-headers'
import { getResource } from '../../../utils/apiRequest'
import { mapBillers } from '../../../utils/formatValue'
import { errorMessage } from '../../../utils/message'
import ConfirmBillerChange from './details/modal/confirmation-modal'

const ProductsContainer = () => {
  const [slug, setSlug] = useState()
  const [showModal, setShowModal] = useState(false)
  const [showStatus, setShowStatus] = useState(false)
  const [values, setValues] = useState(filterValue)
  const [newBiller, setNewBiller] = useState<{ [key: string]: any }>()
  const location = useLocation()
  const [options, setOptions] = useState([
    { label: '', options: { label: '', value: '' } },
  ])

  const stateValue: any = location.state

  const getProducts = () => {
    return getResource('products')
  }
  const getBillers = () => {
    return getResource(`products/${slug}/billers`)
  }

  const { isLoading, isError, error, data, refetch } = useQuery(
    'products',
    getProducts
  )
  const [dataArr, setDataArr] = useState(data?.data)
  useEffect(() => {
    if (values?.query) {
      const dataVal = data?.data?.filter(
        (val: any) =>
          val?.displayName === values?.query ||
          val?.billerSlug === values?.query
      )
      setDataArr(dataVal)
    } else {
      setDataArr(data?.data)
    }
  }, [values, data])
  const {
    isLoading: loadingBillers,
    isRefetching,
    isError: isBillerError,
    error: billerError,
    data: billers,
  } = useQuery(`queryKey${slug}`, getBillers, {
    enabled: !!slug,
  })

  useEffect(() => {
    if (newBiller) {
      setShowModal(true)
    }
  }, [newBiller])
  useEffect(() => {
    setSlug(stateValue?.selectData?.slug)
  }, [stateValue?.selectData])
  useEffect(() => {
    setOptions(mapBillers(billers?.data))
  }, [billers])
  useEffect(() => {
    if (isBillerError) {
      toast.error(`${errorMessage(billerError)}`)
    }
  }, [isBillerError, error, billerError])

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={`${errorMessage(error)}`} />
    )
  } else if (data?.data?.length < 1) {
    component = <FallBack title={'No products list available.'} />
  } else {
    component = (
      <TableWrapper wrapperPb="5rem">
        <DataTable bgColor={'transparent'} layout="fixed">
          <TableHeader headers={productsHeaderList} />
          <CustomTableData
            name="products"
            selectIndex={3}
            tableData={dataArr}
            handleSelectChange={setNewBiller}
            options={
              loadingBillers || isRefetching
                ? [
                    {
                      label: 'Loading...',
                      options: [{ label: '', value: '' }],
                    },
                  ]
                : [
                    {
                      label: 'Select New Biller',
                      options: options || [{ label: '', value: '' }],
                    },
                  ]
            }
          />
        </DataTable>
      </TableWrapper>
    )
  }
  return (
    <Container
      isFetching={isRefetching}
      showFilters={false}
      title="Products"
      padding="0 2rem"
      noScroll
    >
      <ConfirmBillerChange
        showStatus={showStatus}
        setShowStatus={setShowStatus}
        showConfirmModal={showModal}
        handleShow={setShowModal}
        biller={newBiller}
        slug={slug || ''}
        setBiller={setNewBiller}
      />
      <Jumbotron padding={'.5rem 1rem'} direction={'column'}>
        <Filter
          setFilterValues={setValues}
          showFilters={{
            search: {
              placeholder: 'Search',
              type: 'text',
            },
            date: false,
            selects: [],
            // buttons: [
            //   {
            //     label: 'Add New Products',
            //     onClick: () => {},
            //     buttonClass: 'add-button',
            //   },
            // ],
          }}
        />
        {component}
      </Jumbotron>
    </Container>
  )
}
export default ProductsContainer
