import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useLocation } from 'react-router-dom'
import { Jumbotron, Loader, Text } from '../../../../components'
import { Container } from '../../../../components/layout'
import { TimelineElement } from '../../../../components/timeline'
import { getResource, postRequest } from '../../../../utils/apiRequest'
import { formatDate } from '../../../../utils/formatValue'
import { KycContainer, KYCLogs } from '../styles/kyc.styles'
import { IStateProps, ValueProps } from '../type'
import KYCB2bUser from './b2b-business/b2b-user-info'
import B2BDocuments from './b2b-business/b2b-documents'
import { KYCDocuments } from './kyc-documents'
import { KYCUser } from './kyc-user'
import toast from 'react-hot-toast'
import UpdateKYCModal from './update-kyc-modal'

//TODO REFACTOR
const KYCDetailContainer = () => {
  const location = useLocation()
  const state = location.state as IStateProps
  const userId = state?.userId
  const id = state?.id
  const initialState = { comments: '', status: '', reason: '' }
  const [isShown, setIsShown] = useState(false)
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)
  const [value, setValue] = useState<ValueProps>(initialState)
  const getKYCRequest = () => {
    return getResource(`kyc/verifications?id=${id}`)
  }
  const getKYCLog = () => {
    return getResource(
      `activity/logs?count=100&pageNumber=0&id=${id}&category=kyc&entityId=${userId}`
    )
  }
  const { data: kyc, isLoading } = useQuery(['kyc-detail', id], () =>
    getKYCRequest()
  )

  // pass stateId to useQuery func as params to avoid flicker
  const { data, isLoading: loading } = useQuery(['kyc-logs', userId], () =>
    getKYCLog()
  )

  const toggle = () => {
    setIsShown(!isShown)
  }
  const useUpdateMutation = () =>
    useMutation((payload: { [key: string]: any }) =>
      postRequest({
        pathUrl: `kyc/verifications/${id}`,
        payload,
        methodType: 'patch',
      })
    )

  const queryClient = useQueryClient()
  const { isLoading: actionLoading, mutate } = useUpdateMutation()
  const handleUpdate = () => {
    setIsTriggerSubmit(false)
    return mutate(
      { ...value },
      {
        onSuccess: () => {
          toggle()
          toast.success(`KYC updated successfully`)
          queryClient.invalidateQueries('kyc-detail')
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

  const kycDetail = kyc?.data[0]
  return (
    <Container
      showFilters={{
        buttons: [
          {
            label: 'Provide Action',
            onClick: () => toggle(),
            buttonClass: 'add-button',
          },
        ],
      }}
      isFetching={false}
      title="Account Upgrade Request"
      withParams={true}
      routePath="/dashboard/kyc"
      filterValue={false}
    >
      <Jumbotron padding={'0'} margin={'0'}>
        {isLoading || loading ? (
          <Loader />
        ) : (
          <KycContainer>
            {kycDetail?.channel === 'B2B Dashboard' ? (
              <>
                <KYCB2bUser state={kycDetail} />
                <B2BDocuments state={kycDetail} />
              </>
            ) : (
              <>
                <KYCUser state={kycDetail} />
                <KYCDocuments state={kycDetail} />
              </>
            )}

            <KYCLogs>
              <Text as="p" weight="600">
                Action Logs
              </Text>
              <TimelineElement
                actions={data?.data.map((action: any) => ({
                  action: (
                    <Text
                      as="p"
                      flexDirection="column"
                      gap="10px"
                      alignItems="baseline"
                    >
                      <Text as="p" weight="400" size="14px">
                        {formatDate(action.createdAt, 'YYYY-MM-DD HH:mm:ss')}
                      </Text>
                      <Text as="p">{action.subject}</Text>
                    </Text>
                  ),
                }))}
              />
            </KYCLogs>
          </KycContainer>
        )}
      </Jumbotron>
      <UpdateKYCModal
        triggerSubmit={isTriggerSubmit}
        isShown={isShown}
        loading={actionLoading}
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
      />{' '}
    </Container>
  )
}

export default KYCDetailContainer
