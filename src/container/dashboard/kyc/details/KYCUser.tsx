import React from 'react'
import { Button, Text } from '../../../../components'
import { KycUser, KycUserDetails, KycUserImg } from '../styles/kyc.styles'
import { IStateProps } from '../type'
import { Color } from '../../../../assets/theme'
import { formatDate } from '../../../../utils/formatValue'

export const KYCUser = ({ state }: { state: IStateProps }) => {
  return (
    <KycUser>
      <KycUserImg>
        <img
          width={'190px'}
          height={'190px'}
          alt="selfie"
          src={state.documents[0].value}
        />
        <Text
          align="center"
          weight="700"
          size="18px"
          as="p"
          justifyContent="center"
        >
          {state.fullName}
        </Text>
      </KycUserImg>
      <KycUserDetails>
        <div>
          <Text
            weight="400"
            size="14px"
            lineHeight="17px"
            color={Color.alerzoGray2}
            padding="6px 0"
          >
            Verification ID
          </Text>
          <Text
            align="center"
            weight="600"
            size="16px"
            as="p"
            justifyContent="start"
            color={Color.alerzoDarkGray}
          >
            {state.verificationId}
          </Text>
        </div>
        <div>
          <Text
            weight="400"
            size="14px"
            lineHeight="17px"
            color={Color.alerzoGray2}
            padding="6px 0"
          >
            Application Date
          </Text>
          <Text
            align="center"
            weight="600"
            size="16px"
            as="p"
            justifyContent="start"
            color={Color.alerzoDarkGray}
          >
            {formatDate(state.createdAt, 'YYYY-MM-DD HH:mm:ss')}
          </Text>
        </div>
        <div>
          <Text
            weight="400"
            size="14px"
            lineHeight="17px"
            color={Color.alerzoGray2}
            padding="6px 0"
          >
            Status
          </Text>

          {/* Make logic below a util function */}
          <p
            className={
              state.status === 'approved'
                ? 'success'
                : state.status === 'processing'
                ? 'unassigned'
                : state.status === 'failed' || state.status === 'Inactive'
                ? 'failed'
                : state.status
            }
          >
            {state.status}
          </p>
        </div>
      </KycUserDetails>
      <Button onClick={() => console.log('Provide Action')}>
        Provide Action
      </Button>
    </KycUser>
  )
}
