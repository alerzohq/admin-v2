interface IFormProps {
  email: string
  password: string
}

export type LoginProps = {
  isTriggerSubmit: boolean
  values: IFormProps
  setValues: React.Dispatch<React.SetStateAction<IFormProps>>
  submitForm: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
  loading: boolean
}

export interface IResendOTPProps {
  otp: string
  token: string
  email: string
}
