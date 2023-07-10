import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

export const TableItemDiv = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 350px;
  white-space: nowrap;
`

export const TableButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 0.9rem;
height: 30px;
font-weight:500;
border-radius: 4px;
outline: none;
color:${Color.alerzoDarkGray};
background:${Color.alerzoGray3};
border: none;
padding: 2px 8px;
margin: auto;
margin-top: 0.8rem;
cursor: pointer;
max-width: 120px;


`