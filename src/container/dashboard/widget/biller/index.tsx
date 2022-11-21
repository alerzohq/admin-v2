import React, { useCallback, useState } from 'react'
import { useQuery } from 'react-query'

import {
  FallBack,
  Jumbotron,
  Loader,
  Stack,
  Text,
} from '../../../../components'
import { getResource } from '../../../../utils/apiRequest'
import BillerCard from './card'
import SetBiller from './set-biller'
import { BillerCardBox, Inner, BillerWrapper } from './styles/biller.styles'
import { IBillerProp, BillerProps } from './type'

const BillerWidget = () => {
  const [show, setShow] = useState(false)
  const [biller, setBiller] = useState<IBillerProp>({})
  const getBillers = () => {
    return getResource('billers')
  }
  
  const { data, isError, isLoading, refetch } = useQuery('billers', getBillers);

  const handleBiller= useCallback((vals:IBillerProp)=>{
    setBiller(vals)
    setShow(true)
  },[])
 
 
  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack
        error
        title={'Failed to load biller balance.'}
        refetch={refetch}
      />
    )
  } else if (data?.data?.length < 1) {
    component = <FallBack title={'You have no biller yet.'} refetch={refetch} />
  } else {
    component = (
      <Inner>
        <BillerCardBox>
          {data?.data.map((biller: BillerProps, i: number) => (
            <BillerCard key={i} biller={biller} handleBiller={handleBiller} />
          ))}
        </BillerCardBox>
      </Inner>
    )
  }

  return (
    <BillerWrapper>
      <SetBiller show={show} setShow={()=>setShow(false)} biller={biller} />
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Text as={'h4'}>Biller Balance</Text>
        {/* <Button
          noborder
          variant={'transparent'}
          width={'170px'}
          weight={'600'}
          color={Color.alerzoBlue}
          onClick={() =>setShow(true)}
        >
          VIew Biller Settings
        </Button> */}
      </Stack>
      <Jumbotron mt={'.5rem'}>{component}</Jumbotron>
    </BillerWrapper>
  )
}

export default BillerWidget
