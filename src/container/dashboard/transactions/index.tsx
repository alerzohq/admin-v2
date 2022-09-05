import React,{ useState} from 'react'
import { FallBack, Jumbotron, Loader, Table, } from '../../../components';
import { Container } from '../../../components/layout'
import { getResource } from '../../../utils/apiRequest';
import CardWidget from '../widget/card';
import { useQuery } from 'react-query';
import { transHeaderList } from '../../../data/table-headers';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';



const TransactionContainer = () => {

const [selectionRange, setSelectionRange] =useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })

 const getTransactions=() => {
    return getResource('transactions?count=10')
 }

 const {isLoading, data, isError,isFetching} = useQuery('transactions',getTransactions);

 const  handleSelect =({selection}: any)=>{
  //  console.log(selection)
   setSelectionRange({...selectionRange,startDate:selection?.startDate,
    endDate:selection?.endDate
  })
 };

 const handlePreviewChange=(DateRange:any) => {
  console.log({DateRange})

 }
  
  let component;
   if(isLoading){
    component = <Loader text={'Loading'}/>
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
    <Container showFilters title="History" isFetching={isFetching}> 
    
     <CardWidget />
      <Jumbotron>
      {component}
      </Jumbotron>  

      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        onPreviewChange={handlePreviewChange}
      />
    </Container>
  )
}

export default TransactionContainer