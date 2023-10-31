import React, { useEffect, useState } from 'react'
import Modal from '../../../../components/modal'
import { Button, Form, SelectInput } from '../../../../components'
import {
  capitalize,
  convertToKobo,
  convertToNaira,
} from '../../../../utils/formatValue'
import SuccessModal from '../../../../components/success-modal/success-modal'
import { COMMISSION_OPTIONS } from '../../../../data/product-data'
import Checkbox from '../../../../components/checkbox'
import { SelectOptions } from '../../../../@types/global'
import useUpdateCommission from '../hooks/useUpdateCommission'
import { validateForm } from '../details/biller-products/form-validation'

export type UpdateCommissionProps = {
  data: Record<string, any>
  showModal: boolean
  slug: string
  modalTitle: string
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultValues = {
  cap: '',
  merchantCap: '',
  commission: '',
  merchantCommission: '',
  rate: COMMISSION_OPTIONS[0],
}
const UpdateCommission = ({
  data,
  showModal,
  slug,
  modalTitle,
  setShowModal,
}: UpdateCommissionProps) => {
  const [inputValues, setInputValues] = useState(defaultValues)
  const [showSuccess, setShowSuccess] = useState(false)
  const [commissionCap, setCommissionCap] = useState(false)
  const [isMerchantCap, setIsMerchantCap] = useState(false)
  const [error, setError] = useState({
    cap: '',
    merchantCap: '',
    commission: '',
    merchantCommission: '',
  })
  const { mutate, isLoading } = useUpdateCommission(
    setShowSuccess,
    setShowModal,
    slug,
    data?.product_slug
  )

  let isPercentage = inputValues.rate?.value === 'percentage'

  let payload = {
    billerSlug: slug,
    rate: {
      type: inputValues.rate?.value,
      ...(!isPercentage && { amount: convertToKobo(inputValues?.commission) }),
      ...(isPercentage && { percentage: Number(inputValues?.commission) }),
      ...(isPercentage &&
        inputValues?.cap && { cap: convertToKobo(inputValues?.cap) }),
    },
    splits: [
      {
        target: 'business',
        rate: {
          type: inputValues.rate?.value,
          ...(!isPercentage && {
            amount: convertToKobo(inputValues?.merchantCommission),
          }),
          ...(isPercentage && {
            percentage: Number(inputValues?.merchantCommission),
          }),
          ...(isPercentage &&
            inputValues?.merchantCap && {
              cap: convertToKobo(inputValues?.merchantCap),
            }),
        },
      },
    ],
  }

  useEffect(() => {
    if (data) {
      setInputValues({
        ...inputValues,
        cap: convertToNaira(data?.rate?.cap),
        merchantCap: convertToNaira(data?.splits?.[0]?.rate?.cap),
        commission:
          data?.rate?.percentage || convertToNaira(data?.rate?.amount || '0'),
        merchantCommission:
          data?.splits?.[0]?.rate?.percentage ||
          convertToNaira(data?.splits?.[0]?.rate?.amount || '0'),
        rate: { label: capitalize(data?.rate?.type), value: data?.rate?.type },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.rate?.type, showModal])

  const handleChange = (name: string, value: string) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    })
    setError({
      cap: '',
      merchantCap: '',
      commission: '',
      merchantCommission: '',
    })
  }

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const error = validateForm(
      inputValues,
      isPercentage,
      commissionCap,
      isMerchantCap
    )

    if (Object.keys(error).length > 0) {
      setError(error)
    } else {
      mutate(payload)
    }
  }

  const closeSuccessModal = () => {
    setShowSuccess(false)
  }

  return (
    <>
      <Modal
        showModal={showModal}
        titleSize="25px"
        modalWidth="450px"
        subTitleMargin="0"
        title={modalTitle ?? 'Update Rate'}
        contentPadding="0 2rem"
        subTitle="Change Rate for this product"
        setShowModal={() => setShowModal(false)}
      >
        <Form>
          <Form.Control pb="1rem">
            <Form.Label>Rate Type</Form.Label>
            <SelectInput
              onChange={(rate: SelectOptions) =>
                setInputValues({ ...inputValues, rate })
              }
              fullWidth
              value={inputValues.rate}
              options={COMMISSION_OPTIONS}
            />
          </Form.Control>

          <Form.Control pb="0.5rem">
            <Form.Label>Commission</Form.Label>
            <Form.Input
              type="number"
              onChange={(e) => handleChange('commission', e.target.value)}
              placeholder="Commission"
              value={inputValues.commission}
            />
            {error && <Form.Error>{error.commission}</Form.Error>}
          </Form.Control>
          {isPercentage && (
            <Form.Control pb="1rem">
              <Checkbox
                position="relative"
                label="Check to cap Commission Rate"
                onClick={() => setCommissionCap(!commissionCap)}
                checked={commissionCap}
              />
            </Form.Control>
          )}
          {isPercentage && commissionCap && (
            <Form.Control pb="1rem">
              <Form.Label>Commission Capped @</Form.Label>
              <Form.Input
                type="number"
                onChange={(e) => handleChange('cap', e.target.value)}
                placeholder="₦5000"
                value={inputValues.cap}
              />
              {error && <Form.Error>{error.cap}</Form.Error>}
            </Form.Control>
          )}

          <Form.Control pb="0.5rem">
            <Form.Label>Merchants Rate</Form.Label>
            <Form.Input
              type="number"
              onChange={(e) =>
                handleChange('merchantCommission', e.target.value)
              }
              placeholder="Merchants Rate"
              value={inputValues.merchantCommission}
            />
            {error && <Form.Error>{error.merchantCommission}</Form.Error>}
          </Form.Control>
          {isPercentage && (
            <Form.Control pb="1rem">
              <Checkbox
                position="relative"
                label="Check to cap Merchants Rate"
                onClick={() => setIsMerchantCap(!isMerchantCap)}
                checked={isMerchantCap}
              />
            </Form.Control>
          )}
          {isPercentage && isMerchantCap && (
            <Form.Control pb="1rem">
              <Form.Label>Merchants Rate Capped @</Form.Label>
              <Form.Input
                type="number"
                onChange={(e) => handleChange('merchantCap', e.target.value)}
                placeholder="₦5000"
                value={inputValues.merchantCap}
              />
              {error && <Form.Error>{error.merchantCap}</Form.Error>}
            </Form.Control>
          )}
        </Form>
        <Button
          width="60%"
          margin="2rem 0 0"
          radius="10px"
          fontSize="14px"
          weight="500"
          onClick={submitForm}
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </Button>
      </Modal>

      {showSuccess && (
        <SuccessModal
          showSuccess={showSuccess}
          setShowSuccess={setShowSuccess}
          message="You have successfully updated biller"
          btnText="Continue"
          title="Biller Detail Updated"
          onClick={closeSuccessModal}
        />
      )}
    </>
  )
}

export default UpdateCommission
