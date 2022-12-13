import mini from '../../../../../assets/images/pngs/mini.svg'
import maxi from '../../../../../assets/images/pngs/maxi.svg'
import POSItem from './pos-item'
import { Button, HorizontalLine, TotalRow } from './styles/request-details.style'
import { Color } from '../../../../../assets/theme'
import { Text } from '../../../../../components'

const POSRow = () => {
  return (
    <>
      <POSItem imgSrc={mini} text="Alerzopay Mini" number="2" amount="50,000" />
      <POSItem imgSrc={maxi} text="Alerzopay Maxi" number="2" amount="50,000" />
      <TotalRow>
        <Text size="1.125rem" color={Color.alerzoBlue} weight="700">
          Total
        </Text>
        <HorizontalLine />
        <Text size="1.125rem" color={Color.alerzoBlue} weight="700">
          ₦150,000
        </Text>
      </TotalRow>
     
     
    </>
  )
}
export default POSRow
