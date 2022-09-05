import React from 'react'
import { FallBack, Jumbotron, Loader, Table, } from '../../../components';
import { Container } from '../../../components/layout'
import { getResource } from '../../../utils/apiRequest';
import CardWidget from '../widget/card';
import { useQuery } from 'react-query';
import { transHeaderList } from '../../../data/table-headers';



const TransactionContainer = () => {

 const getTransactions=() => {
    return getResource('transactions?count=10')
 }

 const {isLoading, data, isError,isFetching} = useQuery('transactions',getTransactions);

  
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
    </Container>
  )
}

export default TransactionContainer