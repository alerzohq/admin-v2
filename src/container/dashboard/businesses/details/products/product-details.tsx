import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getResource } from '../../../../../utils/apiRequest'
import { useQuery } from 'react-query'
import { Container } from '../../../../../components/layout'
import DetailsContent from '../../../widget/tabs/tab-content-details'
import { productHelper } from '../../../../../data/product-data'
import {
  FallBack,
  Jumbotron,
  Loader,
  Table,
  Text,
} from '../../../../../components'
import { productBillersHeaderList } from '../../../../../data/table-headers'
import { Color } from '../../../../../assets/theme'
import { errorMessage } from '../../../../../utils/message'
import { selectStyles } from '../../../../../components/select-input/styles/select-input.styes'
import DeactivateProductModal from './modal/deactivate-product-modal'

interface CustomizedState {
  slug: string,
  displayName: string
}
const BusinessProductDetailsContainer = () => {
  const location = useLocation()
  const state = location.state as CustomizedState

const {businessId} = useParams()

  const [values, setValues] = useState({})
  const [value, setValue] = useState('')
  const [isDeactivateModal, setIsDeactivateModal] = useState(false)

  const getProductBillers = (slug: string) => {
    return getResource(`products/${slug}/billers`)
  }
  const getProductBillersDetails = (slug: string) => {
    return getResource(`products/${slug}`)
  }
  const { isLoading, isRefetching, isError, refetch, data, error } = useQuery(
    ['billers', state?.slug],
    () => getProductBillers(state?.slug)
  )

  const { data: billerDetails } = useQuery(
    ['billers-details', state?.slug],
    () => getProductBillersDetails(state?.slug)
  )
  const resp = data?.data?.[0]

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={`${errorMessage(error)}`} />
    )
  } else if (data?.data?.length < 1) {
    component = (
      <FallBack title={'You have no biller found.'} refetch={refetch} />
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
        layout="fixed"
      />
    )
  }

  useEffect(() => {
    if (value) {
      if (value === 'Deactivate Product') {
        setIsDeactivateModal(true)
        return setValue('')
      }
    }
  }, [value])

  let actionOptions = [
    {
      label: 'Deactivate Product',
      value: 'Deactivate Product',
    },
  ]

  return (
    <Container
      showFilters={{
        selects: [
          {
            placeholder: 'Actions',
            hideValue: true,
            isClearable: false,
            isSearchable: false,
            styles: selectStyles(false, false, '150px', true),
            values: actionOptions,
            action: true,
            value: '',
            onChange: (e: any) => setValue(e?.value),
          },
        ],
      }}
      isFetching={isRefetching}
      title="Product Information"
    //   routePath="/dashboard/products"
      setFilterValues={setValues}
    >
      <DetailsContent
        resolvedData={productHelper({ ...resp, name: state?.slug })!}
      />
      <Text
        as="p"
        padding="0"
        color={Color.alerzoBlack}
        size="14px"
        textAlign="left"
        whiteSpace="nowrap"
        margin="1.875rem 0 1rem 0"
        weight="600"
        align="center"
      >
        Biller Information
      </Text>
      <Jumbotron padding="0" direction="column" mt="0">
        {component}
      </Jumbotron>
      <DeactivateProductModal
        setValue={setValue}
        setShowModal={setIsDeactivateModal}
        showModal={isDeactivateModal}
        productName={state?.displayName}
        productSlug={state?.slug}
        businessId={businessId}
      />
    </Container>
  )
}
export default BusinessProductDetailsContainer
