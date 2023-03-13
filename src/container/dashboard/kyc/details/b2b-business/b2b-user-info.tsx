import { Stack, Text } from '../../../../../components'
import {
  formatDate,
  formatUnderScore,
  removeHyphen,
} from '../../../../../utils/formatValue'
import { KYCStatus } from '../../styles/kyc.styles'

const KYCB2bUser = ({ state }: any) => {
  let selfie = state?.documents?.find((v: any) => v?.key === 'selfie')
  let businessRC = state?.documents?.find((v: any) => v?.key === 'businessRC')
  let businessWebsite = state?.documents?.find(
    (v: any) => v?.key === 'businessWebsite'
  )
  let businessNature = state?.documents?.find(
    (v: any) => v?.key === 'businessNature'
  )
  let documentType = state?.documents?.find(
    (v: any) => v?.key === 'documentType'
  )
  let address = state?.documents?.find((v: any) => v?.key === 'address')
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: '#F8FAFD',
          height: '350px',
          borderRadius: 20,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: '#fff',
            marginBottom: '1rem',
            border: '1px solid #E8EBEE',
          }}
        >
          <img
            width="200px"
            height="200px"
            alt="selfie"
            src={selfie?.value}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
        <Text as="h3">{state?.fullName}</Text>
      </div>
      <div style={{ padding: '1rem 0 0 0' }}>
        {/* <Stack borderBottom="1px solid #E8EBEE" padding="1rem 0">
          <Text as="p" color="#A5B0B7">
            Business Name
          </Text>
          <Text as="p" weight="600" color="#374B58">
            Gracious Pharmacies
          </Text>
        </Stack> */}
        <Stack
          borderBottom="1px solid #E8EBEE"
          padding="1rem 0"
          direction="row"
        >
          <Stack width="50%">
            <Text as="p" color="#A5B0B7">
              Business Nature
            </Text>
            <Text as="p" weight="600" color="#374B58">
              {formatUnderScore(businessNature?.value) ?? 'N/A'}
            </Text>
          </Stack>
          <Stack width="50%" borderLeft="1px solid #E8EBEE" pl="1rem">
            <Text as="p" color="#A5B0B7">
              Business RC Number
            </Text>
            <Text as="p" weight="600" color="#374B58">
              {businessRC?.value ? `RC${businessRC?.value}` : 'N/A'}
            </Text>
          </Stack>
        </Stack>
        <Stack borderBottom="1px solid #E8EBEE" padding="1rem 0">
          <Text as="p" color="#A5B0B7">
            Business Website
          </Text>
          <Text as="p" weight="600" color="#374B58">
            {businessWebsite?.value ?? 'N/A'}
          </Text>
        </Stack>
        <Stack
          borderBottom="1px solid #E8EBEE"
          padding="1rem 0"
          direction="row"
        >
          <Stack width="50%">
            <Text as="p" color="#A5B0B7">
              CAC Type
            </Text>
            <Text as="p" weight="600" color="#374B58">
              {removeHyphen(documentType?.value) ?? 'N/A'}
            </Text>
          </Stack>
          <Stack width="50%" borderLeft="1px solid #E8EBEE" pl="1rem">
            <Text as="p" color="#A5B0B7">
              Company Status
            </Text>
            <KYCStatus
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
              {state?.status ?? 'N/A'}
            </KYCStatus>
          </Stack>
        </Stack>
        {/* <Stack borderBottom="1px solid #E8EBEE" padding="1rem 0">
          <Text as="p" color="#A5B0B7">
            Company Name
          </Text>
          <Text as="p" weight="600" color="#374B58">
            Gracious Pharmacies
          </Text>
        </Stack> */}
        <Stack borderBottom="1px solid #E8EBEE" padding="1rem 0">
          <Text as="p" color="#A5B0B7">
            Company Address
          </Text>
          <Text as="p" weight="600" color="#374B58">
            {address?.value ?? 'N/A'}
          </Text>
        </Stack>
        {/* <Stack borderBottom="1px solid #E8EBEE" padding="1rem 0">
          <Text as="p" color="#A5B0B7">
            Company Email
          </Text>
          <Text as="p" weight="600" color="#374B58">
            support@graciouspharmacies.com
          </Text>
        </Stack> */}
        <Stack borderBottom="1px solid #E8EBEE" padding="1rem 0">
          <Text as="p" color="#A5B0B7">
            Metamap Status
          </Text>
          <Text as="p" weight="600" color="#374B58">
            {state.metamapStatus ?? 'N/A'}
          </Text>
        </Stack>
        <Stack padding="1rem 0">
          <Text as="p" color="#A5B0B7">
            Metamap Registration Date
          </Text>
          <Text as="p" weight="600" color="#374B58">
            {formatDate(state.createdAt, 'YYYY-MM-DD HH:mm:ss')}
          </Text>
        </Stack>
      </div>
    </div>
  )
}

export default KYCB2bUser
