import { Dispatch, SetStateAction } from 'react'
import { SuccessIcon } from '../../assets/icons'
import { Color } from '../../assets/theme'
import { Button } from '..'
import Modal from '../modal'

type Success = {
  productName?: string
  showSuccess: boolean
  setShowSuccess: Dispatch<SetStateAction<boolean>>
  message: string
  btnText: string
  title: string
  onClick: any
}

const SuccessModal = ({
  productName,
  showSuccess,
  setShowSuccess,
  message,
  btnText,
  title,
  onClick,
}: Success) => {
  return (
    <Modal
      showModal={showSuccess}
      setShowModal={() => {
        setShowSuccess(!showSuccess)
      }}
      titleSize="22px"
      modalWidth="430px"
      title={title}
      contentPadding="0"
      icon={<SuccessIcon />}
      subTitleSize={'16'}
      subTitle={
        <span style={{ marginTop: '15px' }}>
          {message} <br />
          {productName && <span className="bold">{productName}</span>}
        </span>
      }
    >
      <Button
        onClick={onClick}
        height={'45px'}
        borderSize="1px"
        color={Color.alerzoBlue}
        variant="transparent"
        borderColor={Color.alerzoBlue}
        width={'50%'}
        radius="10px"
        fontSize="14px"
        weight="500"
      >
        {btnText}
      </Button>
    </Modal>
  )
}

export default SuccessModal
