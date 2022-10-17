import { useState } from 'react'
import { Color } from '../../../../../assets/theme'
import { Button } from '../../../../../components'
import { terminalHelper } from '../../../../../data/terminal-data'
import DetailsContentWidget from '../../../widget/tabs/tab-content-details'
import ReassignTerminalWidget from '../../../widget/terminal-modal-content/reassign'
import EnableTerminalWidget from '../../../widget/terminal-modal-content/enable'
import {
  ButtonWrapper,
  TerminalDetailWrapper,
} from './styles/tab-content.styles'
import { useMutation, useQuery } from 'react-query'
import { getResource, postRequest } from '../../../../../utils/apiRequest'

const TerminalDetails = ({ data }: any) => {
  const getMerchants = () => {
    return getResource('business-users')
  }

  const {
    isLoading,
    data: merchants,
    isFetching,
  } = useQuery('merchants', getMerchants)
  const [enabled, setIsEnabled] = useState<boolean>(false)
  const [assigned, setIsAssigned] = useState<boolean>(false)
  const [value, setValue] = useState<{
    reassignmentReason?: string
    tid?: string
    businessId?: string
  }>({ reassignmentReason: '', businessId: '', tid: '' })

  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)
  const toggle = (type?: 'assign') => {
    type === 'assign' ? setIsAssigned(!assigned) : setIsEnabled(!enabled)
  }
  type payloadType = {
    [key: string]: any
  }
  const useReAssignMutation = () =>
    useMutation((payload: payloadType) =>
      postRequest('terminals/reassign', payload)
    )
  const useReqMutation = () =>
    useMutation((payload: payloadType) =>
      postRequest('terminals/assign', payload)
    )
  const { isLoading: loadingAssign, mutate } = useReqMutation()
  const { isLoading: loadingReAssign, mutate: reassign } = useReAssignMutation()
  const buttonEnabledText = data?.active
    ? 'Disable Terminal'
    : 'Enable Terminal'
  const assignBtnText =
    data?.user_id !== null ? 'Reassign Terminal' : 'Assign Terminal'
  console.log(value, 'latest')
  return (
    <TerminalDetailWrapper>
      <EnableTerminalWidget
        data={data}
        isShown={enabled}
        handleSubmit={async () => {
          setIsTriggerSubmit(true)
          if (value?.businessId && value?.reassignmentReason) {
            setIsTriggerSubmit(false)
            mutate({ ...value })
          }
        }}
        toggleModal={() => {
          setValue({
            reassignmentReason: '',
            tid: '',
            businessId: '',
          })

          toggle()
        }}
        value={value}
        setValue={setValue}
      />
      <ReassignTerminalWidget
        data={data}
        triggerSubmit={isTriggerSubmit}
        isShown={assigned}
        loadingOptions={isLoading || isFetching}
        loading={loadingAssign || loadingReAssign}
        handleSubmit={async () => {
          setIsTriggerSubmit(true)
          if (value?.businessId) {
            setIsTriggerSubmit(false)
            mutate({ ...value })
          }
        }}
        merchants={merchants?.data}
        toggleModal={() => {
          setValue({
            reassignmentReason: '',
            tid: '',
            businessId: '',
          })
          toggle('assign')
        }}
        value={value}
        setValue={setValue}
      />
      <DetailsContentWidget resolvedData={terminalHelper(data)!} />
      <ButtonWrapper>
        <Button
          height="3.2rem"
          radius="10px"
          borderSize="1px"
          width="14%"
          onClick={() => {
            toggle()
            setValue({
              reassignmentReason: '',
            })
          }}
          color={Color.alerzoBlueTint}
          borderColor={Color.alerzoBlueTint}
          variant="transparent"
        >
          {buttonEnabledText}
        </Button>
        <Button
          height="3.2rem"
          width="14%"
          radius="10px"
          onClick={() => {
            toggle('assign')
            setValue({
              reassignmentReason: '',
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
