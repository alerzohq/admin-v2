import { Stack, Text } from '../../../../components'
import { KycUser, KycUserDetails, KycUserImg } from '../styles/kyc.styles'
import { IStateProps } from '../type'
import { Color } from '../../../../assets/theme'
import { formatDate } from '../../../../utils/formatValue'

export const KYCUser = ({ state }: { state: IStateProps }) => {
  return (
    <KycUser>
      <KycUserImg>
        <img
          width="200px"
          height="200px"
          alt="selfie"
          src={state?.documents?.[0]?.value}
        />
        <Text
          align="center"
          weight="700"
          size="1.5rem"
          as="p"
          justifyContent="center"
        >
          {state.fullName}
        </Text>
      </KycUserImg>
      <KycUserDetails>
        <Stack>
          <Text
            weight="400"
            lineHeight="17px"
            color={Color.alerzoGray2}
            padding="1rem 0"
          >
            Verification ID
          </Text>
          <Text
            align="center"
            weight="600"
            as="p"
            justifyContent="start"
            color={Color.alerzoDarkGray}
          >
            {state?.verificationId ?? 'N/A'}
          </Text>
        </Stack>
        <Stack>
          <Text
            weight="400"
            lineHeight="17px"
            color={Color.alerzoGray2}
            padding="1rem 0"
          >
            Application Date
          </Text>
          <Text
            align="center"
            weight="600"
            as="p"
            justifyContent="start"
            color={Color.alerzoDarkGray}
          >
            {formatDate(state.createdAt, 'YYYY-MM-DD HH:mm:ss')}
          </Text>
        </Stack>
        <Stack>
          <Text weight="400" color={Color.alerzoGray2} padding="1rem 0">
            Metamap Status
          </Text>
          <Text
            align="center"
            margin="0 0 1rem 0"
            as="p"
            justifyContent="center"
            color={Color.alerzoDarkGray}
            className={'unassigned'}
          >
            {state.metamapStatus ?? 'N/A'}
          </Text>
          <Text weight="400" color={Color.alerzoGray2} padding="1rem 0">
            Verification Status
          </Text>
          <Text
            align="center"
            margin="0 0 1rem 0"
            justifyContent="center"
            as="p"
            className={
              state?.status === 'verified'
                ? 'success'
                : state?.status === 'processing'
                ? 'pending'
                : state?.status === 'rejected'
                ? 'failed'
                : ''
            }
          >
            {state.status}
          </Text>
        </Stack>
      </KycUserDetails>
    </KycUser>
  )
}
