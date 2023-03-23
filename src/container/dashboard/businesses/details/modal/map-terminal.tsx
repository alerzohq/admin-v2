import { AxiosError, AxiosResponse } from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query'
import { Color } from '../../../../../assets/theme'
import { Form, SelectInput, Text } from '../../../../../components'
import Modal from '../../../../../components/modal'
import { axiosInstance } from '../../../../../configs/axios-instance'
import { useDebounce } from '../../../../../hooks/useDebounce'
import { getResource } from '../../../../../utils/apiRequest'

const MapTerminalModal: React.FC<{
  show: boolean
  businessId: string
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>
  setShow: (item: boolean) => void
}> = ({ refetch, show, setShow, businessId }) => {
  const queryClient = useQueryClient()
  const [query, setQuery] = useState('')
  const debouncedSearchTerm = useDebounce(query, 1000)

  const getTerminals = () => {
    return getResource(
      query
        ? `terminals?id=${debouncedSearchTerm}`
        : 'terminals/unmapped?count=10&cursor'
    )
  }

  const [addValues, setAddValues] = useState({
    terminalId: '',
    serialNumber: '',
    businessId: businessId,
  })
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)

  const { isLoading: specsLoading, data: specs } = useQuery(
    'terminals',
    getTerminals
  )

  const mutation = useMutation<
    AxiosResponse<any, any>,
    any,
    any,
    AxiosError<any, any>
  >(
    () => {
      return axiosInstance.post('/terminals/assign', { ...addValues })
    },
    {
      onSuccess: () => {
        refetch()
        setShow(false)
        toast.success('Terminal mapped successfully')
        queryClient.invalidateQueries('terminals')
        setAddValues({
          ...addValues,
          serialNumber: '',
          terminalId: '',
        })
      },
    }
  )
  const handleChange = (value: { [key: string]: any }) => {
    return setAddValues({
      ...addValues,
      terminalId: value?.value?.trim(),
      serialNumber: value?.serialNumber,
    })
  }

  const handleIsTriggerSubmit = (triggered: boolean) => {
    setIsTriggerSubmit(triggered)
  }
  return (
    <Modal
      showModal={show}
      setShowModal={() => setShow(!show)}
      buttonText="Assign New Terminal"
      title="Assign New Terminal to Merchant"
      contentPadding={'0'}
      handleSubmit={async () => {
        handleIsTriggerSubmit(true)
        if (addValues.terminalId) {
          handleIsTriggerSubmit(false)
          mutation.mutate(addValues)
        }
      }}
    >
      <>
        <Form>
          <Form.Control pb={'1rem'}>
            <Form.Label>POS Variant</Form.Label>
            {!specsLoading && (
              <SelectInput
                fullWidth
                placeholder="Select Terminal ID"
                options={[
                  {
                    value: '',
                    label: 'Enter Terminal ID',
                    disabled: true,
                  },
                  ...specs?.data?.map(
                    (spec: {
                      specification: { [key: string]: any }
                      id: string
                      serialNumber: string
                    }) => {
                      return {
                        value: spec.id,
                        serialNumber: spec?.serialNumber,
                        label: `${spec?.specification?.variant} - ${spec?.serialNumber}`,
                      }
                    }
                  ),
                ]}
                onChange={(e) => {
                  handleChange(e)
                }}
                onInputChange={(e: any) => {
                  setQuery(e)
                }}
                value={addValues.terminalId}
              />
            )}
            {isTriggerSubmit && (
              <Text
                padding="8px"
                as={'small'}
                weight={'500'}
                color={Color.alerzoDanger}
              >
                {isTriggerSubmit && addValues.terminalId === ''
                  ? 'Terminal ID is required*'
                  : ''}
              </Text>
            )}
          </Form.Control>
        </Form>
        {mutation.isError && (
          <Text
            padding="8px"
            as={'small'}
            weight={'500'}
            color={Color.alerzoDanger}
          >
            {mutation.error.response.data?.stack ===
            `Error: Terminal has already been assigned\n    at AssignTerminal.execute (/usr/app/.dist/src/services/admin/terminals/assign-terminal.js:44:19)\n    at async Object.AdminController.assignTerminal (/usr/app/.dist/src/api/http/controllers/admin.js:272:28)`
              ? 'Terminal has already being assigned'
              : (mutation.error.response.data.message as string)}
          </Text>
        )}
      </>
    </Modal>
  )
}

export default MapTerminalModal
