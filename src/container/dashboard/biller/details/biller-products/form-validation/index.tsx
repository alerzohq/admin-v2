type Error = {
  cap: string
  merchantCap: string
  commission: string
  merchantCommission: string
}

export const validateForm = (
  inputValues: Record<string, any>,
  isPercentage: boolean,
  commissionCap: boolean,
  isMerchantCap: boolean
) => {
  const error = {} as Error

  if (!inputValues.commission) {
    error.commission = 'Please enter a commission'
  } else if (isPercentage && inputValues.commission > 100) {
    error.commission = 'Commission should be 100% or less'
  }

  if (isPercentage && !inputValues.merchantCommission) {
    error.merchantCommission = 'Please enter a merchant commission'
  }

  if (!isPercentage && !inputValues.merchantCommission) {
    error.merchantCommission = 'Please enter a merchant commission'
  }

  if (isPercentage && inputValues.commission < inputValues.merchantCommission) {
    error.merchantCommission =
      'Merchant commission cannot be greater than commission value'
  }

  if (commissionCap && !inputValues.cap) {
    error.cap = 'Please enter a commission capped'
  }

  if (isMerchantCap && !inputValues.merchantCap) {
    error.merchantCap = 'Please enter a Merchant capped'
  }

  if (inputValues.merchantCap > inputValues.cap) {
    error.merchantCap =
      'Merchant capped cannot be greater than commission capped value'
  }

  return error
}
