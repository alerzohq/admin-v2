import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type cardImageProps = {
    bgImage: string;

}
export const Card = styled.div`
display: flex;
justify-content: start;
flex-direction: row;
background-color: #ffffff;
border-radius: 12px;
box-shadow: 0px 6px 60px rgba(0, 0, 0, 0.04);
padding: 5% 5%;
height: auto;
border: 1px solid ${Color.alerzoGrayBorder};

flex-direction: row;

`
export const CardContent = styled.div`
display: flex;
justify-content: start;
flex-direction: column;
margin-left: 1em;
width: 80%;
`
export const CardImage = styled.div<cardImageProps>`
border-radius: 50%;
overflow: hidden;
align-items: baseline;
position: relative;
height: 56px;
width: 56px;
background-size: contain;
background-repeat: no-repeat;
background-image:  ${({ bgImage }) => `url(${bgImage})`}; 

`
export const NotesPage = styled.div`

display: flex;
flex-direction: column;
`
export const AddNoteContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: ${Color.alerzoBlue2};
border: 1px solid ${Color.alerzoBlue3};
padding: 1.2em 0;
border-radius: 10px;
align-items: center;
svg{
    cursor: pointer;
  }
`
export const CardRowRapper = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
column-gap: 41px;
row-gap: 21px;
margin-top: 21px;
@media(max-width:1024px){
 column-gap: 20px;
}
@media(max-width:480px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: 0;
    row-gap: 21px;
}
`
// flex-wrap: wrap;
// justify-content: space-between;
// background-color: #ffffff;
// border-radius: 10px;
// padding: 5% 5%;
// height: auto;
// flex-direction: row;
// row-gap: 1.5rem;
// column-gap: 2.5rem;