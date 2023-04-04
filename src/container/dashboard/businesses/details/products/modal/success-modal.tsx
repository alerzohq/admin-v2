import { useNavigate } from 'react-router-dom'
import { SuccessIcon } from '../../../../../../assets/icons'
import { Color } from '../../../../../../assets/theme'
import { Button } from '../../../../../../components'
import Modal from '../../../../../../components/modal'

const SuccessModal = ({ productName, showSuccess, setShowSuccess }: any) => {
  const navigate = useNavigate()
  return (
    <Modal
      showModal={showSuccess}
      setShowModal={() => {
        setShowSuccess(!showSuccess)
      }}
      titleSize="22px"
      modalWidth="430px"
      title="Product Deactivated"
      contentPadding="0"
      icon={<SuccessIcon />}
      subTitleSize={'16'}
      subTitle={
        <span style={{ marginTop: '15px' }}>
          You have successfully deactivated <br />
          <span className="bold">{productName}</span>
        </span>
      }
    >
      <Button
        onClick={() => navigate(-1)}
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
        {'Back To Products'}
      </Button>
    </Modal>
  )
}

export default SuccessModal
