import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getResource } from '../../../../../utils/apiRequest'
import {
  CardBody,
  GridWrapper,
} from '../../../widget/user-account/styles/cards.styles'
import UserAccount from '../../../widget/user-account'
import { FallBack, Jumbotron, Loader } from '../../../../../components'
import { errorMessage } from '../../../../../utils/message'

const CardsContainer = () => {
  const location = useLocation()
  const thePath = location.pathname
  var result = thePath.split('/')
  const id = result[3]
  const getCustomerDetails = () => {
    return getResource(`customers?query=${id}`)
  }
  const { isLoading, isError, data, isFetching, refetch, error } = useQuery(
    'customer-bank',
    getCustomerDetails
  )
  const bank_details = data?.data[0]?.bank_details
  const user = data?.data[0]
  const renderSwitch = () => {
    if (isError) {
      return (
        <FallBack error refetch={refetch} title={`${errorMessage(error)}`} />
      )
    }
    if (isLoading || isFetching) {
      return <Loader />
    }
    if (data && !bank_details?.length) {
      return (
        <FallBack
          refetch={refetch}
          title={'No bank account found for this customer. '}
        />
      )
    }
    return (
      <CardBody>
        <GridWrapper>
          {bank_details?.map((detail: { [key: string]: string }, i: number) => (
            <UserAccount
              key={i}
              bank={detail?.bank_name}
              accountNumber={detail?.account_number}
              accountName={`${user?.first_name} ${user?.last_name}`}
            />
          ))}
        </GridWrapper>
      </CardBody>
    )
  }

  return (
    <Jumbotron
      overflow="auto"
      responsiveDirection="row"
      padding={'0'}
      minHeight="450px"
    >
      {renderSwitch()}
    </Jumbotron>
  )
}

export default CardsContainer
