import React, { memo } from 'react'
import { Color } from '../../../../../assets/theme'
import { Button, Form,Text} from '../../../../../components'
import { BillerLabel, BillerLogo, CircleFlag } from '../styles/biller.styles'
import { BillerFormProps } from '../type'

const BillerForm = ({
  isTriggerSubmit,
  biller,isLoading,
  setValues,
  setIsTriggerSubmit,
  values,
  handleBiller}:BillerFormProps) => {


    let isValidThreshold = parseInt(values?.minimumBalance) < parseInt(values?.averageBalance)

    const handleChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: e.target.value })
      setIsTriggerSubmit(false)
    }



  return (
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
        value={values?.minimumBalance || ''}
        onChange={handleChange('minimumBalance')}
      />
      <CircleFlag color={Color.alerzoDanger} />
      {isTriggerSubmit && (
        <Text as={'small'} weight={'500'} color={Color.alerzoDanger}>
          {isTriggerSubmit && values?.minimumBalance === ''
            ? 'Minimum threshold is required*'
            : ''}
        </Text>
      )}
    </Form.Control>

    <Form.Control pb={'1rem'}>
      <Form.Label>Average Threshold</Form.Label>
      <Form.Input
        type="number"
        placeholder="Enter average threshold"
        value={values?.averageBalance || ''}
        onChange={handleChange('averageBalance')}
      />
      <CircleFlag color={Color.alerzoWarning} />
      {isTriggerSubmit && (
          <Text as={'small'} weight={'500'} color={Color.alerzoDanger}>
            {isTriggerSubmit && values?.minimumBalance === ''
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
  )
}

export default memo(BillerForm)