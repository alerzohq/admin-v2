import { Button, Text } from '..'
import CloseIcon from '../../assets/icons/close-icon'
import { Color } from '../../assets/theme'
import { Footer } from '../form/styles/form.style'
import {
  BackDrop,
  CloseButton,
  Content,
  Header,
  HeaderText,
  ModalWrapper,
  StyledModal,
} from './styles/modal.styles'
import { ModalProps } from './type'

const Modal = ({
  loading,
  headerText,
  showModal,
  children,
  modalWidth,
  modalHeight,
  modalPadding,
  contentPadding,
  setShowModal,
  buttonText,
  subTitle,
}: ModalProps) => {
  return (
    <>
      <BackDrop isShown={showModal} />
      <ModalWrapper isShown={showModal}>
        <StyledModal
          isShown={showModal}
          modalWidth={modalWidth}
          modalHeight={modalHeight}
          modalPadding={modalPadding}
        >
          <Header>
            <CloseButton>
              <CloseIcon onClick={setShowModal} />
            </CloseButton>
            <HeaderText>
              <Text
                as="p"
                padding="0"
                weight="600"
                color={Color.alerzoBlack}
                size="22px"
                align="center"
              >
                {headerText}
              </Text>
              {subTitle && (
                <Text
                  as="p"
                  padding="0"
                  color={Color.alerzoBlack}
                  size="16px"
                  align="center"
                >
                  {subTitle}
                </Text>
              )}
            </HeaderText>
          </Header>
          <Content contentPadding={contentPadding}>{children}</Content>
          <Footer>
            <Button.Group align="center">
              <Button
                width="40%"
                radius="10px"
                fontSize="15px"
                weight="600"
                onClick={() => {}}
              >
                {loading ? 'Loading...' : `${buttonText}`}
              </Button>
            </Button.Group>
          </Footer>
        </StyledModal>
      </ModalWrapper>
    </>
  )
}
export default Modal
