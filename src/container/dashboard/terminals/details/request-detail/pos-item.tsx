import { Stack, Text } from '../../../../../components'
import { amountHelper } from '../../../../../utils/formatValue'
import { GridContainer, HorizontalLine, ImgWrapper } from './styles/request-details.style'

const POSItem = ({ imgSrc, text, amount, number }: IRequestItem) => {
  return (
    <GridContainer>
      <Stack direction="row" gap="0.6rem" width="50%">
      <ImgWrapper>
        <img src={imgSrc} alt="pos1" />
        </ImgWrapper >
        <Text size="1.125rem" weight="600">
          {text}
        </Text>
      </Stack>

      <Stack width="55%" height="100%" justifyContent="center">
        <Stack direction="row">
          <HorizontalLine>
            <span>{number}</span>
          </HorizontalLine>
        </Stack>
      </Stack>

      <Text width="45%" height="100%" size="1.125rem" weight="600">
        {amountHelper(amount)}
      </Text>
    </GridContainer>
  )
}
export default POSItem
