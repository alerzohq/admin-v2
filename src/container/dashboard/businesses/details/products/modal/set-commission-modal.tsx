import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

import Modal from '../../../../../../components/modal'
import { Button, Form, SelectInput, Text } from '../../../../../../components'
import SuccessModal from '../../../../../../components/success-modal/success-modal'
import { capitalize, removeHyphen } from '../../../../../../utils/formatValue'
import { Color } from '../../../../../../assets/theme'
import { COMMISSION_OPTIONS } from '../../../../../../data/product-data'
import useSetCommission from '../../../hooks/useSetCommission'

type SetCommissionProps = {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  product: Record<string, any>
}
enum Rate {
  percentage = 'percentage',
  flat = 'flat',
}
const CommissionModal: React.FC<SetCommissionProps> = ({
  showModal,
  setShowModal,
  product,
}) => {
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [type, setType] = useState(COMMISSION_OPTIONS[0])
  const [values, setValues] = useState({
    amount: '',
    percentage: '',
    cap: '',
  })
  const { percentage, cap, amount } = values

  let payload = {
    productSlug: product?.product?.slug,
    commissionRate: {
      type: type?.value,
      ...(type?.value === Rate.percentage && { percentage }),
      ...(type?.value === Rate.percentage && { cap: parseInt(cap) * 100 }),
      ...(type?.value === Rate.flat && { amount: parseInt(amount) * 100 }),
    },
  }
  const { mutate, isLoading } = useSetCommission(
    product?.businessId,
    setShowModal,
    setShowSuccess
  )

  useEffect(() => {
    setValues({
      ...values,
      percentage: product?.commissionRates?.[0]?.rate?.percentage,
      cap: product?.commissionRates?.[0]?.rate?.cap,
      amount: product?.commissionRates?.[0]?.rate?.amount,
    })
    setType({
      ...type,
      label: capitalize(product?.commissionRates?.[0]?.rate?.type),
      value: product?.commissionRates?.[0]?.rate?.type,
    })
  }, [product?.productSlug])

  const handleChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: e.target.value })
      setIsTriggerSubmit(false)
    }

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsTriggerSubmit(true)
    if (type?.value === Rate.percentage) {
      if (percentage && Number(percentage) <= 100) {
        setIsTriggerSubmit(false)
        mutate(payload)
      }
    } else if (type?.value === Rate.flat) {
      if (amount) {
        setIsTriggerSubmit(false)
        mutate(payload)
      }
    }
  }
  console.log({Slug:product?.product?.slug})
  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={() => {
          setShowModal(!showModal)
        }}
        titleSize="20px"
        modalWidth="430px"
        title={`Change ${removeHyphen(product?.productSlug)} Rate`}
        subTitle="Change Commission for this product"
        contentPadding="0"
      >
        <Form>
          <Form.Control pb="1rem">
            <Form.Label>Rate Type</Form.Label>
            <SelectInput
              fullWidth
              options={COMMISSION_OPTIONS}
              onChange={setType}
              value={type}
            />
          </Form.Control>
          {type.value === Rate.percentage && (
            <Form.Control pb="1rem">
              <Form.Label>Comission Percentage</Form.Label>
              <Form.Input
                type="number"
                placeholder="Enter Comission Percentage"
                value={percentage || ''}
                onChange={handleChange('percentage')}
              />

              {isTriggerSubmit && (
                <Text as="small" weight="500" color={Color.alerzoDanger}>
                  {isTriggerSubmit && percentage === ''
                    ? 'Percentage is required*'
                    : percentage && Number(percentage) > 100
                    ? 'Commission should not be more than 100% *'
                    : ''}
                </Text>
              )}
            </Form.Control>
          )}
          {type.value === Rate.percentage && (
            <Form.Control pb="1rem">
              <Form.Label>Amount Cap</Form.Label>
              <Form.Input
                type="number"
                placeholder="Enter Amount Cap"
                value={cap || ''}
                onChange={handleChange('cap')}
              />
            </Form.Control>
          )}
          {type.value === Rate.flat && (
            <Form.Control pb="1rem">
              <Form.Label>Commission Amount</Form.Label>
              <Form.Input
                type="number"
                placeholder="Enter Comission Amount"
                value={amount || ''}
                onChange={handleChange('amount')}
              />
              {isTriggerSubmit && (
                <Text as="small" weight="500" color={Color.alerzoDanger}>
                  {isTriggerSubmit && amount === ''
                    ? 'Amount is required*'
                    : ''}
                </Text>
              )}
            </Form.Control>
          )}

          <Form.Control pb="1rem">
            <Button.Group align="center">
              <Button
                onClick={submitForm}
                disabled={isLoading}
                loading={isLoading}
                height="45px"
                width="40%"
              >
                Save Changes
              </Button>
            </Button.Group>
          </Form.Control>
        </Form>
      </Modal>

      {showSuccess && (
        <SuccessModal
          showSuccess={showSuccess}
          setShowSuccess={setShowSuccess}
          message="Commission set successfully"
          btnText="Back To Products"
          title="Commission Set"
          onClick={() => setShowSuccess(false)}
        />
      )}
    </>
  )
}

export default CommissionModal
