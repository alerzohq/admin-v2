import { Color } from '../../../../../assets/theme'
import { Stack, Text } from '../../../../../components'
import {
  formatDate,
  formatUnderScore,
  removeHyphen,
} from '../../../../../utils/formatValue'
import {
  KYCB2bContainer,
  KYCB2BImageBox,
  KYCB2BImageRounded,
} from '../../styles/kyc.styles'

enum KYCB2BKey {
  selfie = 'selfie',
  businessRC = 'businessRC',
  documentType = 'documentType',
}

const KYCB2bUser = ({ state }: { state: Record<string, any> }) => {
  const selfie = state?.documents?.find(
    (v: Record<string, string>) => v?.key === KYCB2BKey.selfie
  )
  const businessRC = state?.documents?.find(
    (v: Record<string, string>) => v?.key === KYCB2BKey.businessRC
  )
  const documentType = state?.documents?.find(
    (v: Record<string, string>) => v?.key === KYCB2BKey.documentType
  )

  return (
    <KYCB2bContainer>
      <KYCB2BImageBox>
        <KYCB2BImageRounded>
          <img width="200px" height="200px" alt="selfie" src={selfie?.value} />
        </KYCB2BImageRounded>
        <Text as="h3">{state?.fullName}</Text>
      </KYCB2BImageBox>
      <Stack padding="1rem 0 0 0">
        <Stack
          borderBottom={`1px solid ${Color.alerzoGrayBorder}`}
          padding="1rem 0"
          direction="row"
        >
          <Stack width="100%">
            <Text as="p" color={Color.alerzoGray2}>
              Verification ID
            </Text>
            <Text as="p" weight="600" color={Color.alerzoDarkGray}>
              {state?.verificationId ?? 'N/A'}
            </Text>
          </Stack>
        </Stack>
        <Stack
          borderBottom={`1px solid ${Color.alerzoGrayBorder}`}
          padding="1rem 0"
          direction="row"
        >
          <Stack width="50%">
            <Text as="p" color={Color.alerzoGray2}>
              Business Nature
            </Text>
            <Text as="p" weight="600" color={Color.alerzoDarkGray}>
              {formatUnderScore(state?.sector) ?? 'N/A'}
            </Text>
          </Stack>
          <Stack
            width="50%"
            borderLeft={`1px solid ${Color.alerzoGrayBorder}`}
            pl="1rem"
          >
            <Text as="p" color={Color.alerzoGray2}>
              Business RC Number
            </Text>
            <Text as="p" weight="600" color={Color.alerzoDarkGray}>
              {businessRC?.value ? `${businessRC?.value}` : 'N/A'}
            </Text>
          </Stack>
        </Stack>
        <Stack
          borderBottom={`1px solid ${Color.alerzoGrayBorder}`}
          padding="1rem 0"
        >
          <Text as="p" color={Color.alerzoGray2}>
            Business Website
          </Text>
          <Text as="p" weight="600" color={Color.alerzoDarkGray}>
            {state?.website ?? 'N/A'}
          </Text>
        </Stack>
        <Stack
          borderBottom={`1px solid ${Color.alerzoGrayBorder}`}
          padding="1rem 0"
          direction="row"
        >
          <Stack width="50%">
            <Text as="p" color={Color.alerzoGray2}>
              Valid ID Type
            </Text>
            <Text as="p" weight="600" color={Color.alerzoDarkGray}>
              {removeHyphen(documentType?.value) ?? 'N/A'}
            </Text>
          </Stack>
          <Stack
            width="50%"
            borderLeft={`1px solid ${Color.alerzoGrayBorder}`}
            pl="1rem"
          >
            <Text as="p" color={Color.alerzoGray2}>
              Company Status
            </Text>
            <Text
              align="center"
              margin=".5rem 0 1rem 0"
              justifyContent="center"
              as="p"
              className={
                state?.status === 'verified'
                  ? 'success'
                  : state?.status === 'processing'
                  ? 'pending'
                  : state?.status === 'rejected'
                  ? 'failed'
                  : 'unassigned'
              }
            >
              {state?.status ?? 'N/A'}
            </Text>
          </Stack>
        </Stack>

        <Stack
          borderBottom={`1px solid ${Color.alerzoGrayBorder}`}
          padding="1rem 0"
        >
          <Text as="p" color={Color.alerzoGray2}>
            Company Address
          </Text>
          <Text as="p" weight="600" color={Color.alerzoDarkGray}>
            {state?.address ?? 'N/A'}
          </Text>
        </Stack>
        <Stack
          borderBottom={`1px solid ${Color.alerzoGrayBorder}`}
          padding="1rem 0"
        >
          <Text as="p" color={Color.alerzoGray2}>
            Metamap Status
          </Text>
          <Text
            as="p"
            weight="600"
            justifyContent="center"
            className={
              state?.metamapStatus === 'verified'
                ? 'success'
                : state?.metamapStatus === 'processing'
                ? 'pending'
                : state?.metamapStatus === 'rejected'
                ? 'failed'
                : 'unassigned'
            }
          >
            {state.metamapStatus ?? 'N/A'}
          </Text>
        </Stack>
        <Stack padding="1rem 0">
          <Text as="p" color={Color.alerzoGray2}>
            Metamap Registration Date
          </Text>
          <Text as="p" weight="600" color={Color.alerzoDarkGray}>
            {formatDate(state.createdAt, 'YYYY-MM-DD HH:mm:ss')}
          </Text>
        </Stack>
      </Stack>
    </KYCB2bContainer>
  )
}

export default KYCB2bUser
