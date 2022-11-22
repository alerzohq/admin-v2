export interface IBillerProp {
  [key: string]: any
}

export type BillerProps = {
  biller: IBillerProp
  handleBiller?: (val: IBillerProp) => void
}

export type BillerSettings = {
  show: boolean
  biller: IBillerProp
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}
