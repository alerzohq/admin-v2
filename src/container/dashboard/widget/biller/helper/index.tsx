import { Color } from "../../../../../assets/theme"

let avarageThreshold = 1500000
let minimumThreshold = 100000

export const color = (biller:{ [key: string]: any}) => {
  let balance = biller ? Number(biller?.balance / 100) : 0
  if (balance <= minimumThreshold) {
    return Color.alerzoDanger
  } else if (balance > 0 && balance <= avarageThreshold) {
    return Color.alerzoWarning
  } else {
    return Color.alerzoGreen
  }
}