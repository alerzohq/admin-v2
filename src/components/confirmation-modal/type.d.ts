export type ConfirmationProps={
  showModal: boolean
  showStatus: boolean
  title?:string
  setShowStatus: Dispatch<SetStateAction<boolean>>
  handleShow: Dispatch<SetStateAction<boolean>>
  handleChange?:()=>{}
}