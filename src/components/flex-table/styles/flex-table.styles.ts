import styled from 'styled-components/macro';
import { Color } from '../../../assets/theme';

type columnProps = {
    width?: string;
    rbColor?: string;
    bgColor?: string;
    leftRadius?: string;
    rightRadius?: string;
}
export const FlexTable = styled.div`
    display: block;
    margin: 2em auto;
    width: 100%;
    min-width: 600px;
`
export const FlexTableRow = styled.div`
    width:100%;
    display: flex;
    flex-flow: row wrap;
    flex-direction:row;
    transition: 0.5s;
    font-size: 14px;
    
`
export const FlexTableColumn = styled.div<columnProps>`
    width: ${({ width }) => width};
    text-align: left;
    padding: 0.5em 0.1em;
    padding-left: 1.2em;
    border-top-left-radius:${({leftRadius})=> leftRadius|| "0"};
    border-top-right-radius:${({rightRadius})=> rightRadius || "0"};
    
    border-right:${({rbColor})=> rbColor ? `1px solid ${rbColor}` : "none"};
    color: ${({ color }) => color ? color : Color.alerzoMediumGray};
    background-color: ${({ bgColor }) => bgColor? bgColor : Color.alerzoGreyBg};
   
`