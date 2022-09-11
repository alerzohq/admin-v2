import { Button, Text } from "..";
import CloseIcon from "../../assets/icons/close-icon";
import { Color } from "../../assets/theme";
import { Footer } from "../form/styles/form.style";
import { BackDrop, CloseButton, Content, Header, HeaderText, ModalWrapper, StyledModal } from "./styles/modal.styles"
import { ModalProps } from "./type";

const Modal = ({ loading,headerText, showModal, children, setShowModal, buttonText }: ModalProps) => {
    return (
        <>
            <BackDrop isShown={showModal} />
            <ModalWrapper isShown={showModal}>
                <StyledModal isShown={showModal}>
                    <Header>
                        <CloseButton>
                            <CloseIcon onClick={setShowModal} />
                        </CloseButton>
                        <HeaderText>
                            <Text as='p'
                                padding='0'
                                weight="600"
                                color={Color.alerzoBlack}
                                size="18px"
                                align='center'>
                                {headerText}
                            </Text></HeaderText>

                    </Header>
                    <Content>
                        {children}
                    </Content>
                    <Footer>
                    <Button.Group align="center">
                    <Button width="40%" radius="10px" fontSize="15px" weight="600" onClick={()=>{}}>
                    {loading ? "Loading..." : `${buttonText}`}
                    </Button>
                </Button.Group>
                </Footer>
                </StyledModal>
         
            </ModalWrapper>
        </>
    )
}
export default Modal;