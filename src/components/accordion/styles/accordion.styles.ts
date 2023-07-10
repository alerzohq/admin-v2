import styled from 'styled-components';
import { Color } from '../../../assets/theme';

type Props = {
    width?: string;
    isShown?: boolean;
}

export const Item = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 4rem 0px;
`;

export const AccordionContainer = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
`;

export const AccordionItem = styled.div<Props>`
  border-radius: 0.4rem;
  padding: 1rem;
`;
export const AccordionBody = styled.div<Props>`
color: #5d5d5d;
width:100%;
font-size:.875rem;
overflow: hidden;
max-height: ${({ isShown }) => isShown ? '1400px' : '0'};
opacity: ${({ isShown }) => isShown ? '1' : '0'};
transition: max-height .5s ease;
`;
export const AccordionHeader = styled.div``;
export const AccordionTitle = styled.div<Props>`
 display: flex;
gap: 20px;
align-items: center;
justify-content:space-between;
height: 65px;
padding-top: 1rem;
width:100%;
text-transform:capitalize;
color: ${Color.alerzoBlack};
line-height: normal;
padding: 0 1rem;
font-weight: 600;
background:${Color.alerzoGray2};
cursor: pointer;
svg{
    transition:.5s;
    transform:${({ isShown }) => isShown ? `` : `rotate(180deg)`};
}
@media (max-width:600px){
    font-size: 1rem;
}
`;
