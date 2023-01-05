import styled from 'styled-components/macro'
import { Color } from '../../../../../../assets/theme'

type props = {
  spanAcross?: string
}
export const HorizontalLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  span {
    margin: 0 1rem;
  }
  &:before {
    content: '';
    flex: 1 1;
    border-bottom: 1px dashed #c3cde0;
    margin: auto;
  }
  &:after {
    content: '';
    flex: 1 1;
    border-bottom: 1px dashed #c3cde0;
    margin: auto;
  }
`
export const GridContainer = styled.div`
  width: 60%;
  display: flex;
  min-width: 480px;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`
export const TotalRow = styled.div<props>`
  width: 60%;
  background: #f0f3ff;
  border: 1px dashed #d7defc;
  border-radius: 6px;
  min-width: 480px;
  height: 61px;
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  box-sizing: border-box;
  gap: 1rem;
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`
export const GridItem = styled.div<props>`
  grid-column: ${({ spanAcross }) =>
    spanAcross ? `span ${spanAcross} / span ${spanAcross}` : 'span 2 / span 2'};
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  margin-top: 2rem;
  background: #fafbff;
  backdrop-filter: blur(2px);
  border-radius: 12px;
  padding: 2rem;
  box-sizing: border-box;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    height: 2px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 3px solid ${Color.alerzoGray};
  }
`
export const Button = styled.div<props>`
  display: flex;
  align-items: center;
  justify-content: center;
  .add-button {
    align-items: center;
    display: flex;
    justify-content: center;
    white-space: nowrap;
    background: ${Color.alerzoBlue};
    border: none;
    border-radius: 10px;
    height: 45px;
    padding: 0 2rem;
    text-align: center;
    font-family: 'Gilmer';
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    color: ${Color.alerzoWhite};
    font-weight: 500;
    cursor: pointer;
    margin-top: 4rem;
  }
`
export const ImgWrapper = styled.div<props>`
width: 67px;
height: 67px;
display: flex;
justify-content: center;
align-items: center;
background: #EEF3FF;
border-radius: 11.61px;
img{
  width: 29.53px;
  height: 49.97px;
}
`