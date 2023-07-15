import Heading from '../../../widget/heading'
import { Accordion, Jumbotron } from '../../../../../components'
import CustomTable from '../../../../../components/table/table-data/custom-table'
import { accordionTableHeaders, billerMockData } from '../../../../../data/biller-data'

const BillerProducts = () => {

 const accordionData= billerMockData?.data[0]?.productList?.map((biller)=>{return {
  title:biller.category,
  component:<Jumbotron padding='0' mt='1rem'>
  <CustomTable
   tableData={biller.products}
   headers={accordionTableHeaders}
   name='biller-products'
   actionBtn
   actionPlaceholder='Change Rate'
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