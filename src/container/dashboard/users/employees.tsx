import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import { FallBack, Filter, Jumbotron, Loader, Table } from '../../../components'
import { employeesHeader } from '../../../data/table-headers'
import { getResource } from '../../../utils/apiRequest'

const Employees = () => {
  const getEmployees = () => {
    return getResource('members')
  }

  const { isLoading, isError, data, refetch } = useQuery(
    'employees',
    getEmployees
  )
  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={'Failed to load Employees'} />
    )
  } else if (data?.data?.length < 1) {
    component = <FallBack title={'No Employees list available yet.'} />
  } else {
    component = (
      <Table
        headerbgColor={'transparent'}
        tableName="employees"
        tableData={data?.data}
        tableHeaders={employeesHeader}
        hideDate
        setParams
      />
    )
  }
  // const [searchParams, setQueryParams] = useSearchParams()
  // const params = Object.fromEntries(searchParams)

  return (
    <Jumbotron padding={'.5rem 1rem'} direction={'column'} width="98%">
      <Filter
        showFilters={{
          search: {
            placeholder: 'Search',
            type: 'text',
          },
          date: false,
          selects: [
            {
              placeholder: 'Status',
              values: [],
              value: '',
              onChange: () => {},
            },
          ],
          buttons: [
            {
              label: 'Add New Employee',
              onClick: () => console.log('first'),
              buttonClass: 'add-button',
            },
          ],
        }}
      />
      {component}
    </Jumbotron>
  )
}

export default Employees
