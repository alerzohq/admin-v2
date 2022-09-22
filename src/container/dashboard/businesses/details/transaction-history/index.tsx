import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { FallBack, Filter, Jumbotron, Loader, Pagination, Table } from '../../../../../components'
import { filterValue } from '../../../../../data/filter-data'
import { transHeaderList } from '../../../../../data/table-headers'
import { getResource } from '../../../../../utils/apiRequest'


const TransactionHistory = ({walletId}:{ walletId: string}) => {

  const getTransactionsHistory = () => {
    return getResource(`transactions?walletId=${walletId}`)
  }

  const [values, setValues] = useState(filterValue)
  const { isLoading, isError, data } = useQuery(
    'transaction-history',
    getTransactionsHistory
  )

  let component;
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = <FallBack error title={'Failed to load businesses history. '} />
  } else if (data?.data?.length < 1) {
    component = <FallBack title={'You have no business history yet. '} />
  } else {
    component = (
      <Table
      headerbgColor={'transparent'}
      tableName="transaction"
      tableData={data?.data}
      tableHeaders={transHeaderList}
      dateFormat="YYYY-MM-DD HH:mm:ss"
      amountIndex={1}
      withSlug
      />
    )
  }
  


  
  return (
    <>
    <Jumbotron padding={'.5rem 1rem'} direction={'column'} > 
     <Filter
       showFilters={{
        search: {
          placeholder: 'Search',
          type: 'text'
        }, 
        date:true,
        selects: [
          { placeholder: 'All Platform', values: [], value: '' , onChange:()=>{}},
          { placeholder: 'Status', values: [], value: '', onChange:()=>{} }     
        ],
        buttons: [
          { label: 'Download CSV', onClick: () => console.log('first') },
        ],
       }}
      />
     
      {component}
     
    </Jumbotron>
      {data?.data && (
      <Pagination data={data} setPageNumber={setValues} />)}
    </>
  )
}

export default TransactionHistory