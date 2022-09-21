import React from 'react'
import { Filter, Jumbotron } from '../../../../../components'


const Members = () => {
  return (
    <>
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
          { label: 'Download CSV', onClick: () => console.log('first') },
        ],
       }}
      />
    </Jumbotron>
    {/* <Pagination data={data} setPageNumber={setValues} /> */}
    </>
  )
}

export default Members