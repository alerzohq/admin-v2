export type ModalProps = {
  children: React.ReactNode
  showModal: bool
  loading?: boolean
  headerText: React.ReactNode
  buttonText?: string
  setShowModal: () => void
}
