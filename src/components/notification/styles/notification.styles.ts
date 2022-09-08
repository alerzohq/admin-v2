import styled from 'styled-components/macro';


type tabProps = {
    active?: boolean;
    bgColor?: string;
}

export const NotificationContainer = styled.div<tabProps>`
width: 100%;
display: flex;
align-items: center;
font-weight: 600;
font-size: 14px;
justify-content: center;
padding: 0.8em 0;
border-top-left-radius: 12px;
border-top-right-radius: 12px;
background-color: ${({bgColor}) => bgColor}

`

