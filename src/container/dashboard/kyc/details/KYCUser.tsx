import React, { useState } from 'react'
import { Button, Text } from '../../../../components'
import { KycUser, KycUserDetails, KycUserImg } from '../styles/kyc.styles'
import { IStateProps, ValueProps } from '../type'
import { Color } from '../../../../assets/theme'
import { formatDate } from '../../../../utils/formatValue'
import UpdateKYCModal from './update-kyc-modal'
import { useMutation, useQueryClient } from 'react-query'
import { postRequest } from '../../../../utils/apiRequest'
import toast from 'react-hot-toast'

export const KYCUser = ({ state }: { state: IStateProps }) => {
  console.log(state, 'state')
  const initialState = { comments: '', status: '', reason: '' }
  const [isShown, setIsShown] = useState(false)
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)
  const [value, setValue] = useState<ValueProps>(initialState)
  const toggle = () => {
    setIsShown(!isShown)
  }
  const id = state?.id
  const useUpdateMutation = () =>
    useMutation((payload: { [key: string]: any }) =>
      postRequest({
        pathUrl: `kyc/verifications/${id}`,
        payload,
        methodType: 'patch',
      })
    )
  const queryClient = useQueryClient()
  const { isLoading: loading, mutate } = useUpdateMutation()
  const handleUpdate = () => {
    setIsTriggerSubmit(false)
    return mutate(
      { ...value },
      {
        onSuccess: () => {
          toggle()
          toast.success(`KYC updated successfully`)
          queryClient.invalidateQueries('KYC')
          setValue(initialState)
        },
        onError: (err: any) => {
          toggle()
          toast.error(`${err?.response?.data?.message}`)
          setValue(initialState)
        },
      }
    )
  }
  return (
    <KycUser>
      <UpdateKYCModal
        triggerSubmit={isTriggerSubmit}
        isShown={isShown}
        loading={loading}
        handleSubmit={async () => {
          setIsTriggerSubmit(true)
          handleUpdate()
        }}
        toggleModal={() => {
          setValue(initialState)
          setIsTriggerSubmit(false)

          toggle()
        }}
        value={value}
        setValue={setValue}
      />
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
      <Button onClick={() => toggle()}>Provide Action</Button>
    </KycUser>
  )
}
