import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type Props = {
  isTop?: boolean
}

export const DateRangeWrapper = styled.div`
  .btn {
    align-items: center;
    display: flex;
    justify-content: space-between;
    background: ${Color.alerzoWhite};
    border: 1px solid rgba(193, 202, 207, 0.5);
    border-radius: 10px;
    height: 45px;
    padding: 0 1rem;
    width: 220px;
    font-family: 'Gilmer';
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    color: ${Color.alerzoDarkGray2};
    text-align: left;
    cursor: pointer;
  }
`
export const DateRangeContainer = styled.div<Props>`
  position: absolute;
  z-index: 5;
  top: ${({ isTop }) => (isTop ? '' : '5.7rem')};
  border: 1px solid ${Color.alerzoGray};
`
