import React from 'react'
import { Filter, Jumbotron } from '../../../../../components'
import { Container } from '../../../../../components/layout'

const TransactionHistory = () => {
  return (
    <Container 
     title="Business Information"
     isFetching={false}
    >
       
    <Jumbotron padding={'0'}> 
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
          { label: 'Add new terminal', onClick: () => console.log('first') },
        ],
       }}
      />
    </Jumbotron>
    {/* <Pagination data={data} setPageNumber={setValues} /> */}
   </Container>
  )
}

export default TransactionHistory