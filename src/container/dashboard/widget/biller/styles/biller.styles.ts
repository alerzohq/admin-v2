import styled from 'styled-components/macro'
import { Color } from '../../../../../assets/theme'

export const BillerWrapper = styled.div`
  margin-top: 2.5rem;
`
export const Inner = styled.div`
  width: 100%;
`
export const BillerCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 32%;
  width: 100%;
  box-sizing: border-box;
  height: 150px;
  border-radius: 1.3rem;
  padding: 1rem;
  border: 1px solid ${Color.alerzoGray};

  @media (max-width: 1240px) {
    flex: 0 0 31.75%;
  }
  @media (max-width: 1024px) {
    flex: 0 0 31.5%;
  }

  @media (max-width: 992px) {
    flex: 0 0 47.5%;
  }

  @media (max-width: 640px) {
    flex: 0 0 100%;
  }
`
export const CardInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
`
export const BillerLogo = styled.div`
  width: 100px;
  height: 35px;
  img {
    width: 100%;
    height: 35px;
    object-fit: contain;
    object-position: right;
  }
`
