import POSItem from './pos-item'
import { HorizontalLine, TotalRow } from './styles/request-details.style'
import { Color } from '../../../../../assets/theme'
import { Text } from '../../../../../components'
import { amountHelper, sumOfValue } from '../../../../../utils/formatValue'

const POSRow = ({ units }: { units: { [key: string]: any }[] }) => {
  const total = sumOfValue(units, 'price', 'quantity')
  return (
    <>
      {units?.map((unit) => (
        <POSItem
          key={unit?.name}
          imgSrc={unit?.imageUrl}
          text={unit?.name}
          number={unit?.quantity}
          amount={(unit?.price * unit?.quantity).toString()}
        />
      ))}
      <TotalRow>
        <Text size="1.125rem" color={Color.alerzoBlue} weight="700">
          Total
        </Text>
        <HorizontalLine />
        <Text size="1.125rem" color={Color.alerzoBlue} weight="700">
          {amountHelper(total)}
        </Text>
      </TotalRow>
    </>
  )
}
export default POSRow
