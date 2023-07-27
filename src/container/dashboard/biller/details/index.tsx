import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import { Container } from '../../../../components/layout'
import { getResource } from '../../../../utils/apiRequest'
import BillerInfo from './biller-info'
import BillerProducts from './biller-products'
import { Loader } from '../../../../components'

const BillerDetailContainer = () => {
  const { slug } = useParams()

  const getBiller = (billerSlug: string) => {
    return getResource(`billers/commissions?slug=${billerSlug}`)
  }
  const { isLoading: loading, data } = useQuery(['biller-detail', slug!], () =>
    getBiller(slug!)
  )

  const billerData = data?.data?.billerProductCommissions?.[0]
  const biller={
    created_at:billerData?.created_at,
    disabled:billerData?.disabled,
    displayName:billerData?.display_name,
    email:billerData?.email,
    phoneNumber:billerData?.phone_number,
    updated_at:billerData?.updated_at,
  }

  return (
    <Container
      isFetching={loading}
      title={'Manage Biller'}
      withParams={true}
      routePath="/dashboard/biller"
      filterValue={false}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <BillerInfo data={biller} />
          <BillerProducts products={billerData?.product_list} />
        </>
      )}
    </Container>
  )
}

export default BillerDetailContainer
