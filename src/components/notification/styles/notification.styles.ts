import styled, { css } from 'styled-components/macro';
import { Color } from '../../../assets/theme';


type tabProps = {
    active?: boolean;
    bgColor?: string;
}

export const NotificationContainer = styled.div<tabProps>`
width: 100%;
display: flex;
align-items: center;
font-weight: 700;
font-size: 14px;
justify-content: center;
padding: 1.2% 0;
border-top-left-radius: 12px;
border-top-right-radius: 12px;
background-color: ${({bgColor}) => bgColor}

`

