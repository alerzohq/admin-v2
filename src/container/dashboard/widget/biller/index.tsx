import React from 'react'
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
import { BillerCardBox, Inner, BillerWrapper } from './styles/biller.styles'
import { BillerProps } from './type'

const BillerWidget = () => {
  const getBillers = () => {
    return getResource('billers')
  }
  const { data, isError, isLoading, refetch } = useQuery('billers', getBillers)

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
            <BillerCard key={i} biller={biller} />
          ))}
        </BillerCardBox>
      </Inner>
    )
  }

  return (
    <BillerWrapper>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Text as={'h4'}>Biller Balance</Text>
        {/* <Text as={'small'} weight={'600'} color={Color.alerzoBlue}>VIew Biller Settings</Text> */}
      </Stack>
      <Jumbotron mt={'.5rem'}>{component}</Jumbotron>
    </BillerWrapper>
  )
}

export default BillerWidget
