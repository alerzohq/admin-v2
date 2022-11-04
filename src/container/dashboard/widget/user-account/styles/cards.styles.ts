import styled from 'styled-components/macro'
import { Color } from '../../../../../assets/theme'

export const CardBody = styled.div`
  width: 100%;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  background: #ffffff;
  padding: 1rem;
  border: 1px solid ${Color?.alerzoGrayBorder};
  border-radius: 10px;
  gap: 30px;
  @media (max-width: 420px) {
    min-width: 18rem
  }

`
export const GridWrapper = styled.div`
  margin: 1.25rem;
  display: grid;
  column-gap: 1rem;
  row-gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    height: 2px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 3px solid ${Color.alerzoGray};
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 420px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    overflow: auto;
    margin: 0;
  }
`
