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

export interface IformValue {
  minimumBalance: string
  averageBalance: string
}

export type BillerFormProps = {
  isTriggerSubmit: boolean
  biller: IBillerProp
  isLoading: boolean
  setValues: React.Dispatch<React.SetStateAction<IformValue>>
  setIsTriggerSubmit: React.Dispatch<React.SetStateAction<boolean>>
  values: IformValue
  handleBiller: (e: React.MouseEvent<HTMLButtonElement>) => void
}
