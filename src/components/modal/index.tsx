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
  subTitleSize,
  title,
  titleSize,
  cancelBtnText,
  showModal,
  children,
  modalWidth,
  modalHeight,
  modalPadding,
  contentPadding,
  setShowModal,
  buttonText,
  subTitle,
  disabled,
  handleSubmit,
  icon,
  withoutFooter,
  subTitleWhiteSpace,
  footer,
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
              {icon}
              <Text
                as="p"
                padding="0"
                weight="600"
                color={Color.alerzoBlack}
                size={titleSize || '18px'}
                align="center"
              >
                {title}
              </Text>
              {subTitle && (
                <Text
                  as="p"
                  padding="0"
                  margin="0 0 2rem 0"
                  color={Color.alerzoBlack}
                  size={subTitleSize || '14px'}
                  align="center"
                  whiteSpace={subTitleWhiteSpace}
                >
                  {subTitle}
                </Text>
              )}
            </HeaderText>
          </Header>
          <Content contentPadding={contentPadding}>{children}</Content>
          {!withoutFooter && (
            <Footer>
              <Button.Group align="center">
                {buttonText && (
                  <Button
                    width={cancelBtnText ? '40%' : '50%'}
                    radius="10px"
                    fontSize="14px"
                    weight="500"
                    loading={loading}
                    disabled={disabled}
                    onClick={handleSubmit ?? setShowModal}
                  >
                    {buttonText}
                  </Button>
                )}
                {cancelBtnText && (
                  <Button
                    width={'40%'}
                    radius="10px"
                    fontSize="14px"
                    weight="500"
                    borderSize="1px"
                    variant="transparent"
                    color={Color?.alerzoBlueTint}
                    borderColor={Color?.alerzoBlueTint}
                    onClick={setShowModal}
                  >
                    {cancelBtnText}
                  </Button>
                )}
              </Button.Group>
            </Footer>
          )}
        </StyledModal>
      </ModalWrapper>
    </>
  )
}
export default Modal
