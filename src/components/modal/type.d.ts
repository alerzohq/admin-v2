import React, { ReactNode } from 'react'

export type ModalProps = {
  children?: React.ReactNode
  showModal: bool
  loading?: boolean
  headerText: React.ReactNode
  buttonText?: string
  modalHeight?: string
  modalWidth?: string
  modalPadding?: string
  contentPadding?: string
  subTitle?: string
  setShowModal: () => void
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  icon?: ReactNode
  withoutFooter?: boolean
}
