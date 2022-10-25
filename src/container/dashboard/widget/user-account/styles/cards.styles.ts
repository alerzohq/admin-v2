import styled from 'styled-components/macro'
import { Color } from '../../../../../assets/theme'

export const CardBody = styled.div`
width:100%;
`
export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
box-sizing: border-box;
background: #FFFFFF;
padding: 1rem;
height: 9rem;
border: 1px solid ${Color?.alerzoGrayBorder};
border-radius: 10px;
`
export const GridWrapper = styled.div`
margin: 1.25rem;
display: grid;
column-gap: 1rem; 
row-gap: 1rem;
grid-template-columns: repeat(3, minmax(0, 1fr));
`