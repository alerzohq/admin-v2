import { Container } from '../../../../components/layout'
import { billerMockData } from '../../../../data/biller-data'
import BillerInfo from './biller-info'
import BillerProducts from './biller-products'

const BillerDetailContainer = () => {

  return (
    <Container
      isFetching={false}
      title={ 'Manage Biller'}
      withParams={true}
      routePath="/dashboard/biller"
      filterValue={false}
    ><BillerInfo data={billerMockData?.data?.[0]}/>
    <BillerProducts/>
    </Container>
  )
}

export default BillerDetailContainer
