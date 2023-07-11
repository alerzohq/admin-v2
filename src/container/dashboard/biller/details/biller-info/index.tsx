import { Button, Jumbotron } from '../../../../../components'
import Heading from '../../../widget/heading'
import { Color } from '../../../../../assets/theme'
import MinDataTable from './min-table'

const BillerInfo = () => {
  return (
    <>
     <Heading text='Biller Details'>
             <Button onClick={()=>{}}
                width='140px'
                variant={Color.alerzoDanger100}
                color={Color.alerzoDanger}
                weight='600'>
                Disabled
            </Button>
      </Heading>
      <Jumbotron padding='0' mt='1rem' mb='2rem' minHeight='150px'>

      <MinDataTable />

      </Jumbotron>
    </>
  )
}

export default BillerInfo