import React, { memo, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { Color } from '../../../../../assets/theme'
import { Button, Form, Text } from '../../../../../components'
import Modal from '../../../../../components/modal'
import { axiosInstance } from '../../../../../configs/axios-instance'
import { BillerLabel, BillerLogo, CircleFlag } from '../styles/biller.styles'
import { BillerSettings } from '../type'

const SetBiller = ({ show, setShow, biller }: BillerSettings) => {
  const queryClient = useQueryClient()
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)
  const [values, setValues] = useState({
    minimumBalance: '',
    averageBalance: '',
  })
  const { minimumBalance, averageBalance } = values

  let payload = {
    minimumBalance,
    averageBalance,
  }

  let isValidThreshold = parseInt(minimumBalance) < parseInt( averageBalance)

  useEffect(() => {
    setValues({
      ...values,
      minimumBalance: biller?.minBalance,
      averageBalance: biller?.averageBalance,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [biller?.minBalance, biller?.averageBalance])

  const setBillerThreshold = async (payload: {}) => {
    return axiosInstance.patch(`billers/${biller?.slug}`, payload)
  }

  const { mutate, isLoading } = useMutation(setBillerThreshold, {
    onSuccess: () => {
      queryClient.invalidateQueries('billers')
      setShow(false)
      toast.success('Threshold set successfully')
    },
    onError: () => {
      toast.error('Failed to set threshold')
    },
  })

  const handleChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: e.target.value });
      setIsTriggerSubmit(false)
    }

  const handleBiller = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsTriggerSubmit(true)
   if(minimumBalance && averageBalance && (Number(minimumBalance) < Number(averageBalance))){
    setIsTriggerSubmit(false)
    mutate(payload);
   }
  }

  return (
    <Modal
      showModal={show}
      title={'Set Biller Threshold'}
      setShowModal={setShow}
      withoutFooter
      contentPadding={'1rem'}
    >
      <Form>
        <Form.Control pb={'1rem'}>
          <Form.Label>Biller</Form.Label>
          <BillerLabel>
            <BillerLogo width={'70px'} position={'left'}>
              {biller?.logo ? (
                <img src={biller?.logo} alt="biller-logo" />
              ) : null}
            </BillerLogo>
            <Text as={'small'} padding={'0 1rem'} color={Color.alerzoGray2}>
              {biller?.displayName}
            </Text>
          </BillerLabel>
        </Form.Control>
        <Form.Control pb={'1rem'}>
          <Form.Label>Minimum Threshold</Form.Label>
          <Form.Input
            type="number"
            placeholder="Enter Minimum amount"
            value={minimumBalance || ''}
            onChange={handleChange('minimumBalance')}
          />
          <CircleFlag color={Color.alerzoDanger} />
          {isTriggerSubmit && (
              <Text as={'small'} weight={'500'} color={Color.alerzoDanger}>
                {isTriggerSubmit && minimumBalance === ''
                  ? 'Minimum threshold is required*'       
                  : ''}
              </Text>)}
        </Form.Control>
        
        <Form.Control pb={'1rem'}>
          <Form.Label>Average Threshold</Form.Label>
          <Form.Input
            type="number"
            placeholder="Enter average threshold"
            value={averageBalance || ''}
            onChange={handleChange('averageBalance')}
          />
          <CircleFlag color={Color.alerzoWarning} />
          {isTriggerSubmit && (
              <Text as={'small'} weight={'500'} color={Color.alerzoDanger}>
                {isTriggerSubmit && minimumBalance === ''
                  ? 'Average threshold is required*'       
                  :!isValidThreshold?'Average threshold should be greater than minimum threshold*':'' }
              </Text>)}
        </Form.Control>
        

        <Form.Control pb={'1rem'}>
          <Button.Group align={'center'}>
            <Button loading={isLoading} width={'170px'} onClick={handleBiller}>
              Save Changes
            </Button>
          </Button.Group>
        </Form.Control>
      </Form>
    </Modal>
  )
}

export default memo(SetBiller)
