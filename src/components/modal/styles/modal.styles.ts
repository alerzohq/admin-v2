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
  textAreaWidth?: string
  textAreaBottomMargin?: string
}

export const BackDrop = styled.div<props>`
  position: ${({ isShown }) => (isShown ? 'fixed' : null)};
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  width: ${({ isShown }) => (isShown ? '100%' : null)};
  height: ${({ isShown }) => (isShown ? '100%' : null)};
  top: 0;
  left: 0;
  background: rgba(38, 40, 62, 0.6);
  backdrop-filter: blur(6px);
  z-index: 9999;
  overflow-y:auto;
`

export const ModalWrapper = styled.div<props>`

  display: ${({ isShown }) => (isShown ? 'flex' : 'none')};
  justify-content: center;
  padding: 2rem 0;
  z-index: 9999;
  width: inherit;
  outline: 0;
  width: 100%;
 /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  /* display: flex; */

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
  transition: all 0.5 ease;
  min-height: ${({ modalHeight }) => (modalHeight ? modalHeight : '290px')};
  width: ${({ modalWidth }) => (modalWidth ? modalWidth : '25%')};
  padding: ${({ modalPadding }) =>
    modalPadding ? modalPadding : '2rem 1.5rem'};
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  transform: ${({ isShown }) => (isShown ? 'scale(1)' : 'scale(0)')};
  opacity: ${({ isShown }) => (isShown ? '1' : '0')};
  animation-name: grow-box;
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  display: flex;
  flex-direction: column;
  align-content: inherit;
  height: 100%;
  justify-content: space-between;

  @keyframes grow-box {
    from {
      transform: translateY(100%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @media (max-width: 1024px) {
    width: 80%;
  } ;
`
export const Content = styled.div<props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ contentPadding }) =>
    contentPadding ? contentPadding : '2em 3.5em'};
  justify-content: start;
  @media (max-width: 480px) {
    padding: 0.5em 1.5em;
  } ;
`

export const TextArea = styled.textarea<props>`
  border: 1px solid rgba(193, 202, 207, 0.5);
  height: ${({ textAreaHeight }) =>
    textAreaHeight ? textAreaHeight : '300px'};
  width: ${({ textAreaWidth }) => textAreaWidth ?? '100%'};
  border-radius: 0.6rem;
  margin-top: ${({ textAreaTopMargin }) =>
    textAreaTopMargin ? textAreaTopMargin : '1rem'};
  margin-bottom: ${({ textAreaBottomMargin }) => textAreaBottomMargin};
  padding: 0.5rem;
  outline: none;
  resize: none;
  font-size: 0.8rem;
  box-sizing: border-box !important;
  font-family: inherit;

  &::placeholder {
    font-size: 0.8rem;
    color: #a5b0b7;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`

export const Footer = styled.div<props>`
  display: flex;
  justify-content: ${({ align }) => (align ? align : 'center')};
  align-items: center;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
`
