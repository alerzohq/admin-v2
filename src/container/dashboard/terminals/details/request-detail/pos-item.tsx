import { Stack, Text } from '../../../../../components'
import { GridContainer, HorizontalLine } from './styles/request-details.style'

const POSItem = ({ imgSrc, text, amount, number }: IRequestItem) => {
  return (
    <GridContainer>
      <Stack direction="row" gap="0.6rem" width="55%">
        <img src={imgSrc} alt="pos1" />
        <Text size="1.125rem" weight="600">
          {text}
        </Text>
      </Stack>

      <Stack width="60%" height="100%" justifyContent="center">
        <Stack direction="row">
          <HorizontalLine>
            <span>{number}</span>
          </HorizontalLine>
        </Stack>
      </Stack>

      <Text width="35%" height="100%" size="1.125rem" weight="600">
        ₦{amount}
      </Text>
    </GridContainer>
  )
}
export default POSItem
