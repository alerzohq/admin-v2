import styled from 'styled-components/macro'
type props = {
  isShown?: boolean
  modalPadding?: string
  contentPadding?: string
  align?: string
  direction?: string
  textAreaHeight?: string
  modalHeight?: string
  modalWidth?: string
  textAreaTopMargin?: string
}

export const ModalWrapper = styled.div<props>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
  width: 100%;
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
`
export const BackDrop = styled.div<props>`
  position: ${({ isShown }) => (isShown ? 'fixed' : null)};
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  width: ${({ isShown }) => (isShown ? '100%' : null)};
  height: ${({ isShown }) => (isShown ? '100%' : null)};
  top: 0;
  left: 0;
  background: rgba(38, 40, 62, 0.6);
  backdrop-filter: blur(6px);
  z-index: 500;
`
export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.3rem;
`

export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: lightgray;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`

export const CloseButton = styled.div`
  align-self: end;
  :hover {
    cursor: pointer;
  }
`
export const StyledModal = styled.div<props>`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 20px;
  min-height: ${({ modalHeight }) => (modalHeight ? modalHeight : '290px')};
  width: ${({ modalWidth }) => (modalWidth ? modalWidth : '35%')};
  padding: ${({ modalPadding }) => (modalPadding ? modalPadding : '2em 1.5em')};
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  transform: ${({ isShown }) => (isShown ? 'scale(1)' : 'scale(0)')};
  opacity: ${({ isShown }) => (isShown ? '1' : '0')};
  @media (max-width: 1024px) {
    width: 80%;
  } ;
`
export const Content = styled.div<props>`
  display: flex;
  flex-direction: column;
  align-item: center;
  padding: ${({ contentPadding }) =>
    contentPadding ? contentPadding : '2em 3.5em'};
  justify-content: start;
  @media (max-width: 480px) {
    padding: 0.5em 1.5em;
  } ;
`

export const TextArea = styled.textarea<props>`
  border: 1px solid rgba(193, 202, 207, 0.5);
  height: 100px;
  height: ${({ textAreaHeight }) =>
    textAreaHeight ? textAreaHeight : '300px'};
  border-radius: 0.6rem;
  margin-top: ${({ textAreaTopMargin }) =>
    textAreaTopMargin ? textAreaTopMargin : '1rem'};
  padding: 0.5rem;
  outline: none;
  resize: none;
  font-size: 0.8rem;
  font-family: inherit;
  @media (max-width: 480px) {
    height: 200px;
  }
  &::placeholder {
    font-size: 0.8rem;
    color: #a5b0b7;
  }
`

export const Footer = styled.div<props>`
  display: flex;
  justify-content: ${({ align }) => (align ? align : 'center')};
  align-items: center;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
`
