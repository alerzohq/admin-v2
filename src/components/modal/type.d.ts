import React, { ReactNode } from 'react'

export type ModalProps = {
  children?: React.ReactNode
  showModal: bool
  loading?: boolean
  title: React.ReactNode
  buttonText?: string
  modalHeight?: string
  modalWidth?: string
  modalPadding?: string
  contentPadding?: string
  subTitleMargin?: string,
  subTitleSize?: string
  subTitle?: string | React.ReactNode
  titleSize?: string
  cancelBtnText?: string
  setShowModal: Dispatch<SetStateAction<boolean>>
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  icon?: ReactNode
  withoutFooter?: boolean
  disabled?: boolean
  subTitleWhiteSpace?: string
  footer?: React.ReactNode
}
