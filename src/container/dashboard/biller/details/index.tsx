import { Container } from '../../../../components/layout'
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
    ><BillerInfo/>
    <BillerProducts/>
    </Container>
  )
}

export default BillerDetailContainer
