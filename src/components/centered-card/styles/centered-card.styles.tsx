import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type cardImageProps = {
  bgImage: string
}

export const ReceiptWrapper = styled.div`
  width: 100%;
  padding: 1em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.3rem;
  flex: 0 0 23%;
  background-color: rgba(233, 239, 246, 1);
  border-radius: 10px;
  padding: 2rem 0;
`
export const ReceiptItem = styled.div<cardImageProps>`
  width: 30%;
  background-color: ${Color.alerzoWhite};
  border-radius: 12px;
  padding: 1.2rem 2rem 3rem 2rem;
  background-size: contain;
  @media (max-width: 1300px) {
    width: 35%;
  }
  @media (max-width: 1200px) {
    width: 37%;
  }
  @media (max-width: 1150px) {
    width: 40%;
  }
  @media (max-width: 1024px) {
    width: 45%;
  }
  @media (max-width: 840px) {
    width: 50%;
  }
  @media (max-width: 741px) {
    width: 60%;
  }
  @media (max-width: 615px) {
    width: 70%;
  } ;
`
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: middle;
  padding: 2.2rem 0 2rem 0;
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 2rem;
  column-gap: 2rem;
  row-gap: 1.2rem;
  margin-bottom: 3rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  } ;
`
export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  column-gap: 1rem;
  margin-top: 1rem;
  button{
    font-weight:600;
    letter-spacing:0;
  }
  @media (max-width:420px){
    flex-direction:column;
    gap:20px ;
  }
`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
`
