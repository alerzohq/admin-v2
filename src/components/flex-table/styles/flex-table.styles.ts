import styled from 'styled-components/macro';
import { Color } from '../../../assets/theme';

type columnProps = {
    width?: string;
    flex?: string;
    selfAlign?: string;
    rbColor?: string;
    leftRadius?: string;
    rightRadius?: string;
    bgColor?: string;
    topLeftRadius?: string;
    topRightRadius?: string;
    bottomLeftRadius?: string;
    bottomRightRadius?: string;
    padding?: string;
    showBorder?: boolean;
    margin?: string;

}
export const CardWrapper = styled.div`
display: flex;
width: 100%;
margin-top: 1em;
background-color: white;
border-radius: 12px;
`
export const CardContainer = styled.div<columnProps>`
flex: ${({ flex }) => flex ? flex : 1};
display: flex;
flex-direction:column;
flex-wrap: wrap; 

`
export const CardItem = styled.div<columnProps>`
flex: ${({ flex }) => flex ? flex : 1};
padding: ${({padding})=>padding}; 
margin: ${({margin})=>margin}; 
border-right: ${({ showBorder }) => showBorder ? `1px solid ${Color.alerzoGrayBorder }` : "none" };
align-self: ${({ selfAlign }) => selfAlign };
background-color:${({ bgColor }) => bgColor ? bgColor : Color.alerzoGreyBg};
border-top-left-radius:${({ topLeftRadius }) => topLeftRadius || "0"};
border-top-right-radius:${({ topRightRadius }) => topRightRadius || "0"};
border-bottom-left-radius:${({ bottomLeftRadius }) => bottomLeftRadius || "0"};
border-bottom-right-radius:${({ bottomRightRadius }) => bottomRightRadius || "0"};
`
