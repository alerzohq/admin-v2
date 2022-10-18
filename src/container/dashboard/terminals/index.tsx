import React, { useEffect, useState } from 'react'
import {
  FallBack,
  Form,
  Jumbotron,
  Loader,
  Pagination,
  Table,
  Text,
} from '../../../components'
import { Container } from '../../../components/layout'
import {
  getNewFilterResource,
  getResource,
  getTerminalsRequestsData,
} from '../../../utils/apiRequest'
import CardWidget from '../widget/card'
import { useMutation, useQuery } from 'react-query'
import { filterValue } from '../../../data/filter-data'
import { Tabs, TabsContext } from '../../../components/tabs-new/Tabs'
import DynamicTable from '../../../components/react-table'
import { terminalsTableMapper } from './tableConfig'
import { useNavigate } from 'react-router-dom'
import { terminalHeader } from '../../../data/table-headers'
import { filterProps } from '../../../@types'
import {
  ActiveTerminalsIcon,
  DefectiveTerminalsIcon,
  InactiveTerminalsIcon,
  TerminalManualAdd,
  UnassignedTerminalsIcon,
} from '../../../assets/icons'
import { Color } from '../../../assets/theme'
import Modal from '../../../components/modal'
import { TerminalModal, TerminalModalChild } from './terminalmodal.styles'
import { AxiosResponse, AxiosError } from 'axios'
import { axiosInstance } from '../../../configs/axios-instance'
import toast from 'react-hot-toast'
import { Edit, TerminalBulkAdd, Upload } from '../../../assets/icons/terminals'

const TransactionContainer = () => {
  const navigate = useNavigate()

  const [values, setValues] = useState(filterValue)
  const { setActiveTab } = React.useContext(TabsContext)
  const [isShown, setIsShown] = useState(false)
  const [addMethod, setAddMethod] = useState<'manual' | 'excel' | ''>('')
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)
  const [addValues, setAddValues] = useState({
    serialNumber: '',
    specification: '',
  })
  const mutation = useMutation<
    AxiosResponse<any, any>,
    any,
    any,
    AxiosError<any, any>
  >(
    (inviteData: { serialNumber: string; POSVariant: string }) => {
      return axiosInstance.post('/terminals', { tid: '', ...addValues })
    },
    {
      onSuccess: () => {
        toast.success('Terminal add successfully')
        setAddMethod('')
        setAddValues({ serialNumber: '', specification: '' })
      },
    }
  )

  useEffect(() => {
    setActiveTab && setActiveTab('Existing Terminals')
  }, [])

  const getTerminalsSpecs = () => {
    return getResource(`terminal/specifications`)
  }
  const { isLoading: specsLoading, data: specs } = useQuery(
    'terminal-specs',
    getTerminalsSpecs
  )
  const getTerminalStats = () => {
    return getResource(`terminals/statistics`)
  }
  const { isLoading: loading, data: Stats } = useQuery(
    'terminal-stats',
    getTerminalStats
  )
  const Statistics = Stats?.data
  const getTerminalsHandler = (filterValue: filterProps) => {
    return getNewFilterResource(`terminals`, filterValue)
  }
  const getTerminalsRequestsHandler = (count: number) => {
    return getTerminalsRequestsData(`terminals/requests`, filterValue.count)
  }
  const {
    isLoading: isLoadingExistingTerrminals,
    data: existingTerrminalsData,
    isError: isErrorExistingTerrminals,
    isFetching: isFetchingExistingTerrminals,
    refetch,
  } = useQuery(['terminals', values], () => getTerminalsHandler(values), {
    keepPreviousData: true,
  })

  const {
    isLoading: isLoadingTerrminalsRequests,
    data: terrminalsRequestsData,
    isError: isErrorTerrminalsRequests,
    isFetching: isFetchingTerrminalsRequests,
  } = useQuery(
    ['requestsTerminals', values.count],
    () => getTerminalsRequestsHandler(values.count),
    { keepPreviousData: true }
  )
  let existingTerrminals
  if (isLoadingExistingTerrminals) {
    existingTerrminals = <Loader />
  } else if (isErrorExistingTerrminals) {
    existingTerrminals = (
      <FallBack error title={'Failed to load terminals. '} refetch={refetch} />
    )
  } else if (existingTerrminalsData?.data?.length < 1) {
    existingTerrminals = (
      <FallBack title={'You have no terminals yet.'} refetch={refetch} />
    )
  } else {
    existingTerrminals = (
      <Table
        tableName="existTerminal"
        tableData={existingTerrminalsData?.data}
        tableHeaders={terminalHeader}
        dateFormat="YYYY-MM-DD HH:mm:ss"
      />
    )
  }
  let requestsTerrminals
  if (isLoadingTerrminalsRequests) {
    requestsTerrminals = <Loader />
  } else if (isErrorTerrminalsRequests) {
    existingTerrminals = <FallBack error title={'Failed to load terminals. '} />
  } else if (terrminalsRequestsData?.data?.length < 1) {
    requestsTerrminals = (
      <FallBack title={'You have no requested terminals yet. '} />
    )
  } else {
    requestsTerrminals = (
      <DynamicTable
        data={terrminalsRequestsData?.data}
        mappers={terminalsTableMapper}
      />
    )
  }
  const statistics = {
    card1: Statistics?.activeTerminals,
    card2: Statistics?.inactiveTerminals,
    card3: Statistics?.defectiveTerminals,
    card4: Statistics?.unassignedTerminals,
  }
  const labels = {
    card1: 'Active Terminals',
    card2: 'Inactive Terminals',
    card3: 'Defective Terminals',
    card4: 'Unassigned Terminals',
  }
  const icons = {
    card1: ActiveTerminalsIcon,
    card2: InactiveTerminalsIcon,
    card3: DefectiveTerminalsIcon,
    card4: UnassignedTerminalsIcon,
  }
  const toggle = () => {
    setIsShown(!isShown)
  }
  const handleChange =
    (name: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setAddValues({ ...addValues, [name]: e.target.value.trim() })
    }
  return (
    <>
      <Modal
        showModal={isShown}
        setShowModal={toggle}
        headerText="Select Preferred Option"
        contentPadding={'0'}
        withoutFooter
        modalHeight="270px"
      >
        <TerminalModal>
          <TerminalModalChild
            onClick={() => {
              setIsShown(false)
              setAddMethod('manual')
            }}
          >
            <div className="svg-container">
              <TerminalManualAdd width="100%" />
              <Edit className="svg-icon" />
            </div>
            <Text weight={'600'} justifyContent="center" padding={'8px 2rem'}>
              Manually Enter Information
            </Text>
          </TerminalModalChild>
          <TerminalModalChild
            onClick={() => {
              setIsShown(false)
              setAddMethod('manual')
            }}
            className={'disabled'}
          >
            <div className="svg-container ">
              <TerminalBulkAdd width="100%" />
              <Upload className="svg-icon" />
            </div>
            <Text
              width="100%"
              justifyContent="center"
              weight={'600'}
              padding={'8px 2rem'}
            >
              Upload Document
            </Text>
          </TerminalModalChild>
        </TerminalModal>
      </Modal>
      <Modal
        showModal={addMethod === 'manual'}
        setShowModal={() => setAddMethod('')}
        buttonText="Add Terminal"
        headerText="Add New Terminal"
        contentPadding={'0'}
        handleSubmit={async () => {
          setIsTriggerSubmit(true)
          if (addValues.serialNumber && addValues.specification) {
            setIsTriggerSubmit(false)
            mutation.mutate(addValues)
          }
        }}
      >
        <>
          <Form>
            <Form.Control pb={'1rem'}>
              <Form.Label>Serial Number</Form.Label>
              <Form.Input
                type="text"
                onChange={handleChange('serialNumber')}
                placeholder="Enter serial number"
                value={addValues.serialNumber}
              />
              {isTriggerSubmit && (
                <Text
                  padding="8px"
                  as={'small'}
                  weight={'500'}
                  color={Color.alerzoDanger}
                >
                  {isTriggerSubmit && addValues.serialNumber === ''
                    ? 'serial Number is required*'
                    : ''}
                </Text>
              )}
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>POS Variant</Form.Label>
              {!specsLoading && (
                <Form.Select
                  placeholder="Select POS variant"
                  options={[
                    {
                      value: '',
                      label: 'Select POS variant',
                      disabled: true,
                    },
                    ...specs?.data?.map(
                      (spec: { variant: string; id: string }) => {
                        return {
                          value: spec.id,
                          label: spec.variant,
                        }
                      }
                    ),
                  ]}
                  onChange={handleChange('specification')}
                  value={addValues.specification}
                />
              )}
              {isTriggerSubmit && (
                <Text
                  padding="8px"
                  as={'small'}
                  weight={'500'}
                  color={Color.alerzoDanger}
                >
                  {isTriggerSubmit && addValues.specification === ''
                    ? 'POS Varient is required*'
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
              {mutation.error.response.data.message as string}
            </Text>
          )}
        </>
      </Modal>
      <Container
        showFilters={{
          search: {
            placeholder: 'Search',
          },
          selects: [
            { placeholder: 'models', values: [], value: '' },
            {
              searchQuery: 'active',
              placeholder: 'Status',
              values: [
                { label: 'Active', value: true },
                { label: 'Inactive', value: false },
              ],
              value: '',
            },
          ],
          buttons: [{ label: 'Add new terminal', onClick: () => toggle() }],
        }}
        title="Terminals"
        setFilterValues={setValues}
        isFetching={
          isFetchingExistingTerrminals || isFetchingTerrminalsRequests
        }
      >
        <Tabs activeTab={'Existing Terminals'}>
          <Tabs.TabLinks>
            <Tabs.Tab label="Existing Terminals">Existing Terminals</Tabs.Tab>
            <Tabs.Tab label="Terminal Requests">Terminal Requests</Tabs.Tab>
          </Tabs.TabLinks>
          <div>
            <Tabs.Panel label="Existing Terminals">
              <CardWidget
                statistics={statistics}
                loading={loading}
                labels={labels}
                icons={icons}
              />
              <Jumbotron padding={'0'}>{existingTerrminals}</Jumbotron>
              <Pagination
                data={existingTerrminalsData}
                setPageNumber={setValues}
              />
            </Tabs.Panel>
            <Tabs.Panel label="Terminal Requests">
              <CardWidget />
              <Jumbotron padding={'0'}>{requestsTerrminals}</Jumbotron>
              <Pagination
                data={terrminalsRequestsData}
                setPageNumber={setValues}
              />
            </Tabs.Panel>
          </div>
        </Tabs>
      </Container>
    </>
  )
}

export default TransactionContainer
