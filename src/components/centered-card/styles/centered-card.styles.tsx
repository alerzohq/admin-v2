import styled from 'styled-components/macro';


type cardImageProps = {
    bgImage: string;

}

export const ReceiptWrapper=styled.div`
width: 100%;
padding: 1em 0;
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:.3rem;
flex:0 0 23%;
background-color: rgba(233, 239, 246, 1);
border-radius: 10px;
padding: 2rem 0;
`
export const ReceiptItem=styled.div<cardImageProps>`
background-image:  ${({ bgImage }) => `url(${bgImage})`}; 
width: 32%;
height: 594px;
padding: 1.2rem;
background-repeat: no-repeat;
@media(max-width:1024px){
    width: 60%;
};
@media(max-width:820px){
    width: 50%;
};
@media(max-width:480px){
    width: 80%;
    overflow-y: scroll;
    padding-bottom: 3rem;
    height:500px;
};
`
export const Header=styled.div`
display: flex;
justify-content: center;
align-items: middle;
padding: 2.2rem 0 2rem  0;
`

export const Body=styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));;
column-gap: .5rem;
column-gap: 2rem;
row-gap: 1.2rem;
@media(max-width:480px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
};
`
export const ButtonWrapper=styled.div`
display: flex;
margin-top: 1rem;
column-gap: 1rem;
margin-top: 2.5rem;
@media(max-width:1024px){
    width: 96%;
};


`
export const Item=styled.div`
display: flex;
flex-direction: column;
`