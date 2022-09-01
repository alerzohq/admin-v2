import React from 'react'
import { FallBack, Jumbotron, Table } from '../../../components';
import { Container } from '../../../components/layout'
import { useFetch } from '../../../hooks'
import CardWidget from '../widget/card';



const TransactionContainer = () => {

  const {data,loading, error} = useFetch({pathUrl:'transactions?count=10'});

  let component;

   if(loading){

   }
   else if(error){

  }
    else if(data ){
      component= <FallBack
      title={"You have no transaction yet. "}
      
    />
       
    }else{
      component=<Table
       tableData={[{name:'Gabriel'},{name:'Gabriel'},]} 
      tableHeaders={['Name']}  
        /> 
    }

  return (
    <Container  title="History">    
     <CardWidget />
      <Jumbotron>
      {component}
      </Jumbotron>
    
    </Container>
  )
}

export default TransactionContainer