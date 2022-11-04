import { Color } from '../../../../assets/theme'
import { Stack, Text } from '../../../../components'
import {
  capitalizeFirstLetterInSentence,
  removeHyphen,
} from '../../../../utils/formatValue'
import { Card } from './styles/cards.styles'

interface Props {
  accountName?: string
  accountNumber?: string
  bank?: string
}
const UserAccount = ({ accountNumber, accountName, bank }: Props) => {
  return (
    <Card>
      <Stack flexWrap="wrap" direction="row" justifyContent="space-between" gap="30px">
        <Stack width="auto">
          <Text
            color={Color.alerzoGrayishBlue}
            size="0.75rem"
            margin="0 0 .5rem 0"
          >
            Account number
          </Text>
          <Text weight="600" color={Color.alerzoGrayishBlue2} size="1rem">
            {accountNumber || '-'}
          </Text>
        </Stack>
        <Stack Stack width="auto">
          <Text
            color={Color.alerzoGrayishBlue}
            size="0.75rem"
            margin="0 0 .5rem 0"
          >
            Account Name
          </Text>
          <Text weight="600" color={Color.alerzoGrayishBlue2} size="1rem">
            {capitalizeFirstLetterInSentence(accountName) || '-'}
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text
          color={Color.alerzoGrayishBlue}
          size="0.75rem"
          margin="0 0 .5rem 0"
        >
          Bank name
        </Text>
        <Text weight="600" color={Color.alerzoGrayishBlue2} size="1rem">
          {removeHyphen(bank) || '-'}
        </Text>
      </Stack>
    </Card>
  )
}

export default UserAccount
