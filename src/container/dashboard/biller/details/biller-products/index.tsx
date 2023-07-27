import Heading from '../../../widget/heading'
import { Accordion, FallBack, Jumbotron } from '../../../../../components'
import CustomTable from '../../../../../components/table/table-data/custom-table'
import { accordionTableHeaders} from '../../../../../data/biller-data'
import { useState } from 'react'

const BillerProducts = ({products}:{products:Record<string,any>[]|null}) => {
const[,setProductName]=useState('')

const handleChange=(item:{}) => {

}

 const accordionData= products?.map((biller)=>{
  return {
  title:biller?.product_category,
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
     {products?
     <Accordion data={accordionData}/>
     :<Jumbotron>
         <FallBack title='No Biller products' />
      </Jumbotron>}

    </>
  )
}

export default BillerProducts