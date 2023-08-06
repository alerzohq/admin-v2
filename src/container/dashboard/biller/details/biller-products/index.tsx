import Heading from '../../../widget/heading'
import { Accordion, FallBack, Jumbotron } from '../../../../../components'
import CustomTable from '../../../../../components/table/table-data/custom-table'
import { accordionTableHeaders} from '../../../../../data/biller-data'
import { useState } from 'react'
import UpdateCommission from '../../modal/update-commission'

const BillerProducts = ({products,slug}:{products:Record<string,any>[]|null, slug:string}) => {
const[product,setProduct]=useState<Record<string,any>>({})
const[showModal,setShowModal] = useState(false)

const handleChange=(item:Object) => {
setProduct(item)
setShowModal(true)

}

 const accordionData= products?.map((biller)=>{
  return {
  title:biller?.product_category,
  component:<Jumbotron padding='0' mt='1rem' minHeight='100px'>
  <CustomTable
   tableData={biller.products}
   headers={accordionTableHeaders}
   name='biller-products'
   actionBtn
   actionPlaceholder='Change Rate'
   handleChange={(item)=>{handleChange(item)}}
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
      <UpdateCommission
       data={product}
       slug={slug}
       modalTitle={product?.product_name}
       showModal={showModal}
       setShowModal={setShowModal}
       />

    </>
  )
}

export default BillerProducts