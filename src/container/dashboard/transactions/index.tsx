import React,{ useState} from 'react'
import { FallBack, Jumbotron, Loader, Pagination,Table, } from '../../../components';
import { Container } from '../../../components/layout'
import { getResource } from '../../../utils/apiRequest';
import CardWidget from '../widget/card';
import { useQuery } from 'react-query';
import { transHeaderList } from '../../../data/table-headers';




const TransactionContainer = () => {

const [count,] = useState(10);
const [pageNumber,setPageNumber] = useState(0);
const [status,setFilter] = useState('Cable Purchase')
const [selectionRange, ] =useState({
      startDate: new Date().getTime(),
      endDate: new Date().getTime(),
      key: 'selection',
  })
const {startDate, endDate}= selectionRange

// &from=${startDate}&to=${endDate}
// &status=${status || null}
const onSuccess=(value:any)=>{
  console.log({value})
}



 const getTransactions=(count:number,pageNumber:number,status: string,startDate:number ,endDate:number, ) => {
    return getResource(`transactions?count=${count}&pageNumber=${pageNumber}`)
 }

 const {isLoading, data, isError,isFetching,isPreviousData} = useQuery(['transactions',count,pageNumber,status,startDate,endDate],
  ()=>getTransactions(count,pageNumber,status,startDate,endDate),
  { keepPreviousData : true ,
    onSuccess:onSuccess
  }
  );



  let component;
   if(isLoading){
    component = <Loader />
   }
   else if(isError){
    component= <FallBack
    error
    title={"Failed to load transaction history. "}
      
    /> 

   }
    else if(data?.data?.length < 1 ){
    component= <FallBack
    title={"You have no transaction yet. "}
      
    />   
    }else{ 
      component=<Table
       tableName="transaction"
       tableData={data?.data} 
       tableHeaders={transHeaderList}  
        /> 
    }



  return (
    <Container showFilters title="History" setFilterValues={setFilter} isFetching={isFetching}> 

    
     <CardWidget />
      <Jumbotron>
      {component}
      </Jumbotron> 

  
     
      <Pagination data={data} setPageNumber={setPageNumber } pageNumber={pageNumber} isPreviousData={isPreviousData} />
     
    </Container>
  )
}

export default TransactionContainer