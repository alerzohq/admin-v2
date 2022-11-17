import { useState } from 'react'
import { Color } from '../../../../../assets/theme'
import { Button, Loader } from '../../../../../components'
import { terminalHelper } from '../../../../../data/terminal-data'
import DetailsContentWidget from '../../../widget/tabs/tab-content-details'
import ReassignTerminalWidget from '../../../widget/terminal-modal-content/reassign'
// import EnableTerminalWidget from '../../../widget/terminal-modal-content/enable'
import {
  ButtonWrapper,
  TerminalDetailWrapper,
} from './styles/tab-content.styles'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getResource, postRequest } from '../../../../../utils/apiRequest'
import { toast } from 'react-hot-toast'
import { ValueProps } from '../type'
import EnableTerminalWidget from '../../../widget/terminal-modal-content/enable'

const TerminalDetails = ({ data }: any) => {
  const queryClient = useQueryClient()
  const [enabled, setIsEnabled] = useState<boolean>(false)
  const [assigned, setIsAssigned] = useState<boolean>(false)
  const pathUrl =
    data?.user_id !== null ? 'terminals/reassign' : 'terminals/assign'
  const enablePath = data?.active ? 'deactivate' : 'activate'
  const buttonEnabledText = data?.active
    ? 'Disable Terminal'
    : 'Enable Terminal'
  const assignBtnText =
    data?.user_id !== null ? 'Reassign Terminal' : 'Assign Terminal'

  const [value, setValue] = useState<ValueProps>({
    reassignmentReason: '',
    businessId: '',
    serial_number: '',
  })
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)
  const toggle = (type?: 'assign') => {
    type === 'assign' ? setIsAssigned(!assigned) : setIsEnabled(!enabled)
  }

  const getMerchants = () => {
    return getResource('business-users')
  }
  const useAssignMutation = () =>
    useMutation((payload: { [key: string]: any }) =>
      postRequest({ pathUrl, payload, methodType: 'post' })
    )
  const useEnableTermMutation = () =>
    useMutation((payload: { [key: string]: any }) =>
      postRequest({
        pathUrl: `terminals/${data?.id}/${enablePath}`,
        payload,
        methodType: 'patch',
      })
    )

  const {
    isLoading,
    data: merchants,
    isFetching,
  } = useQuery('merchants', getMerchants)
  const { isLoading: loadingEnable, mutate: enableTerminal } =
    useEnableTermMutation()
  const { isLoading: loadingAssign, mutate } = useAssignMutation()
  const handleEnable = () => {
    setIsTriggerSubmit(true)
    enableTerminal(
      {},
      {
        onSuccess: () => {
          queryClient.invalidateQueries('terminal')
          if (enabled) {
            return toggle()
          }
          toast.success(`Terminal updated successfully`)
        },
        onError: (error: any) => {
          toast.error(`${error?.response?.data?.message}`)
        },
      }
    )
  }
  const handleReassign = () => {
    if (
      data?.user_id !== null &&
      value?.businessId !== undefined &&
      value?.reassignmentReason !== undefined
    ) {
      setIsTriggerSubmit(false)
      return mutate(
        { ...value },
        {
          onSuccess: () => {
            toggle('assign')
            toast.success(`Terminal reassigned successfully`)
            queryClient.invalidateQueries('terminal')
          },
          onError: (err: any) => {
            toggle('assign')
            toast.error(`${err?.response?.data?.message}`)
          },
        }
      )
    }
    if (data?.user_id === null && value?.businessId !== undefined) {
      setIsTriggerSubmit(false)
      return mutate(
        { ...value },
        {
          onSuccess: () => {
            toggle('assign')
            toast.success(`Terminal assigned successfully`)
            queryClient.invalidateQueries('terminal')
            setValue({
              reassignmentReason: '',
              serial_number: '',
              businessId: '',
            })
          },
          onError: (err: any) => {
            toggle('assign')
            toast.error(`${err?.response?.data?.message}`)
            setValue({
              reassignmentReason: '',
              serial_number: '',
              businessId: '',
            })
          },
        }
      )
    }
  }
  return (
    <TerminalDetailWrapper>
      <ReassignTerminalWidget
        data={data}
        triggerSubmit={isTriggerSubmit}
        isShown={assigned}
        loadingOptions={isLoading || isFetching}
        loading={loadingAssign}
        handleSubmit={async () => {
          setIsTriggerSubmit(true)
          handleReassign()
        }}
        merchants={merchants?.data}
        toggleModal={() => {
          setValue({
            reassignmentReason: '',
            serial_number: '',
            businessId: '',
          })
          setIsTriggerSubmit(false)

          toggle('assign')
        }}
        value={value}
        setValue={setValue}
      />
      <EnableTerminalWidget
        isShown={enabled}
        handleSubmit={handleEnable}
        toggleModal={() => {
          setIsTriggerSubmit(false)
          toggle()
        }}
      />
      <DetailsContentWidget resolvedData={terminalHelper(data)!} />
      <ButtonWrapper>
        <Button
          height="3.2rem"
          radius="10px"
          borderSize="1px"
          width="150px"
          onClick={async () => {
            if (data?.active) {
              return toggle()
            }
            handleEnable()
          }}
          color={Color.alerzoBlueTint}
          borderColor={Color.alerzoBlueTint}
          variant="transparent"
          weight={'600'}
        >
          {loadingEnable ? (
            <Loader color={Color.alerzoBlue} />
          ) : (
            buttonEnabledText
          )}
        </Button>
        <Button
          height="3.2rem"
          width="150px"
          weight={'600'}
          radius="10px"
          onClick={() => {
            toggle('assign')
            setValue({
              reassignmentReason: '',
              serial_number: '',
              businessId: '',
            })
          }}
        >
          {assignBtnText}
        </Button>
      </ButtonWrapper>
    </TerminalDetailWrapper>
  )
}

export default TerminalDetails
