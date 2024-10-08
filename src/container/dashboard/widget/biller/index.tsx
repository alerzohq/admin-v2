import React, { useCallback, useState } from 'react'
import { toast } from 'react-hot-toast'

import {
  FallBack,
  Jumbotron,
  Loader,
  Stack,
  Text,
} from '../../../../components'
import AllPermissions from '../../../../configs/access-control'
import { errorMessage, unauthorizedMessage } from '../../../../utils/message'
import BillerCard from './card'
import useFetchBillers from './helper/useFetchBillers'
import SetBiller from './set-biller'
import { BillerCardBox, Inner, BillerWrapper } from './styles/biller.styles'
import { IBillerProp, BillerProps } from './type'

const BillerWidget = () => {
  const { setBillerThresholdAccess } = AllPermissions()
  const [show, setShow] = useState(false)
  const [biller, setBiller] = useState<IBillerProp>({})

  const { data, isError, isLoading, error, refetch } = useFetchBillers()

  const handleBiller = useCallback(
    (vals: IBillerProp) => {
      if (!setBillerThresholdAccess) {
        toast.error(unauthorizedMessage)
      } else {
        setBiller(vals)
        setShow(true)
      }
    },
    [setBillerThresholdAccess]
  )

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={`${errorMessage(error)}`} />
    )
  } else if (data?.data?.length < 1) {
    component = <FallBack title="You have no biller yet." refetch={refetch} />
  } else {
    component = (
      <Inner>
        <BillerCardBox>
          {data?.data.map((billerItem: BillerProps, i: number) => (
            <BillerCard
              key={i}
              biller={billerItem}
              handleBiller={handleBiller}
            />
          ))}
        </BillerCardBox>
      </Inner>
    )
  }

  return (
    <BillerWrapper>
      <SetBiller show={show} setShow={() => setShow(false)} biller={biller} />
      <Stack direction="row" justifyContent="space-between">
        <Text as="h4">Biller Balance</Text>
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

      <Jumbotron mt=".5rem">{component}</Jumbotron>
    </BillerWrapper>
  )
}

export default BillerWidget
