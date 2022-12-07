import styled from 'styled-components/macro'
import { Color } from '../../../../../assets/theme'

type Props = {
  width?: string
  position?: string
  color?: string
}

export const BillerWrapper = styled.div`
  margin-top: 2.5rem;
`
export const Inner = styled.div`
  width: 100%;
`
export const BillerCardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 1rem;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  height: 150px;
  border-radius: 1.3rem;
  padding: 1rem;
  border: 1px solid ${Color.alerzoGray};
  cursor: pointer;
`
export const CardInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
`
export const BillerLogo = styled.div<Props>`
  width: ${({ width }) => width ?? '100px'};
  height: 35px;
  img {
    width: 100%;
    height: 35px;
    object-fit: contain;
    object-position: ${({ position }) => position ?? 'right'};
  }
`
export const BillerLabel = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  border: 1px solid rgba(193, 202, 207, 0.5);
  color: #001928;
  border-radius: 10px;
  padding: 0 1rem;
  outline: none;
`

export const CircleFlag = styled.div<Props>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${({ color }) => color};
  position: absolute;
  right: 50px;
  margin-top: 40px;
`
