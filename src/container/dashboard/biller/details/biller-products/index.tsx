import Heading from '../../../widget/heading'
import { Accordion, Jumbotron } from '../../../../../components'
import CustomTable from '../../../../../components/table/table-data/custom-table'
import { accordionTableHeaders, billerMockData } from '../../../../../data/biller-data'
import { useState } from 'react'

const BillerProducts = () => {
const[,setProductName]=useState('')

const handleChange=(item:{}) => {

}

 const accordionData= billerMockData?.data[0]?.productList?.map((biller)=>{return {
  title:biller.category,
  component:<Jumbotron padding='0' mt='1rem'>
  <CustomTable
   tableData={biller.products}
   headers={accordionTableHeaders}
   name='biller-products'
   actionBtn
   actionPlaceholder='Change Rate'
   handleChange={(item)=>{handleChange(item);
    setProductName(biller.category)}}
   />
  </Jumbotron>}})

  return (
    <>
    <Heading text='Product List'/>
    <Accordion data={accordionData}/>
    </>
  )
}

export default BillerProducts