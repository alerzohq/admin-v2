import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type Props = {
  color?: string
  size?: string
  weight?: string
  padding?: string
  cursor?: string
  align?: string
}
export const TerminalModal = styled.div`
  display: flex;
  gap: 4%;
  width: 100%;
  text-align: center;
  svg {
    cursor: pointer;
  }
`
export const TerminalModalChild = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  svg {
    cursor: pointer;
  }
  .svg-container {
    position: relative;
  }
  .svg-container.disabled {
  }
  .svg-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`
export const ModalHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 1rem;
  .go-back {
    position: absolute;
    left: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 0.8rem;
  }
`
export const Span = styled.span`
  color: ${Color.alerzoBlue};
  cursor: pointer;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;

  /* dashed border */

  .dragdrop-input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;
    .icon-box {
      position: relative;
      margin: 2rem 0;
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    }
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`

export const Text = styled.div<Props>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => (weight ? weight : '500')};
  padding: ${({ padding }) => (padding ? padding : '.5rem 0')};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  word-wrap: break-word;
  line-height: 1.5;
  cursor: ${({ cursor }) => cursor};
  .textInner {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`
export const Small = styled.small`
  color: #c1cacf;
  font-size: 0.7rem;
  color: #111;
  font-weight: 600;
`
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: 'row';
`
export const CustomButton = styled.button`
  border: 1px solid ${({ color }) => color};
  box-sizing: border-box;
  border-radius: 10px;
  color: ${({ color }) => color};
  width: 180px;
  height: 40px;
  outline: none;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.3s linear;

  &:hover {
    background: ${({ color }) => color};
    color: #fff;
  }
`
export const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 0;
  gap: 1rem;
`

export const TextArea = styled.textarea`
  border: 1px solid rgba(193, 202, 207, 0.5);
  height: 100px;
  width: 100%;
  border-radius: 0.5rem;
  margin-top: 1rem;
  padding: 0.5rem;
  outline: none;
  resize: none;
  font-size: 0.8rem;
  font-family: inherit;
  box-sizing: border-box;
  &::placeholder {
    font-size: 0.8rem;
  }
`

export const Success = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 80%;
  padding-top: 0.5rem;
  margin: auto;
  img {
    width: 80px;
    height: 80px;
    margin-bottom: 0.8rem;
  }
`
