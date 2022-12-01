import { Color } from '../../../../../assets/theme'

export const color = (biller: { [key: string]: any }) => {
  let balance = biller ? Number(biller?.balance / 100) : 0
  if (balance <= biller?.minBalance) {
    return Color.alerzoDanger
  } else if (
    balance > biller?.minBalance &&
    balance <= biller?.averageBalance
  ) {
    return Color.alerzoWarning
  } else {
    return Color.alerzoGreen
  }
}

export const isBillerValid = (values: {
  minimumBalance: string
  averageBalance: string
}) => {
  if (
    values?.minimumBalance &&
    values?.averageBalance &&
    Number(values?.minimumBalance) < Number(values?.averageBalance)
  ) {
    return true
  }
}
