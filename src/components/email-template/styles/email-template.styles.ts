import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

export const TemplateBody = styled.div`
width:35%;
display:flex;
flex-direction: column;
background: ${Color.alerzoWhite};
padding: 2rem 1.6rem;
border-radius: 10px;
`
export const TemplateHeader= styled.div`
display:flex;
justify-content: center;
align-items: center;
padding: 0 0 1rem 0;
`
export const TemplateCard= styled.div`
display:flex;
justify-content: center;
flex-direction: column;
height: 180px;
padding: 1.5rem 1rem;
align-items: center;
background-color: ${Color.alerzoBlue9};
border-radius: 10px 10px 0px 0px;
`
export const MessageBody= styled.div`
display:flex;
justify-content: start;
align-items: start;
padding: 1rem;
flex-direction: column;
border-radius: 10px 10px 0px 0px;
background-color: ${Color.alerzoLight};
`
export const TemplateFooter= styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 0 0 1rem 0;
`
export const FooterText = styled.div`
display:flex;
justify-content: center;
align-items: center;
padding: 0 0 1rem 0;
`