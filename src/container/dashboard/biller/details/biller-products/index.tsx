import React from 'react'
import Heading from '../../../widget/heading'
import { Accordion } from '../../../../../components'

const BillerProducts = () => {

  const data=[
  { title:'Electricity',component:<div>Electricity Table</div>},
  { title:'Airtime',component:<div>Airtime Table</div>},
  { title:'Data',component:<div>Data Table</div>},
  { title:'Betting',component:<div>Electricity Table</div>},
  { title:'Cable Subscription',component:<div>Cable Subscription Table</div>},
  { title:'Internet Subscription',component:<div>Internet Subscription Table</div>},
]
  return (
    <>
    <Heading text='Product List'/>
    <Accordion data={data}/>
    </>
  )
}

export default BillerProducts