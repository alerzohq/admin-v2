import React from 'react'
import { Container } from '../../../components/layout'
import { useFetch } from '../../../hooks'


const TransactionContainer = () => {

  const {data,loading, error} = useFetch({pathUrl:'transactions?count=10'});

  console.log("TRANS",data)
  console.log({loading})
  console.log({error})
  
  return (
    <Container  title="History">

      Transaction
    </Container>
  )
}

export default TransactionContainer