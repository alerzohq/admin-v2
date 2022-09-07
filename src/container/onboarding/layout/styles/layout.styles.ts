import styled from "styled-components/macro";

type Props = {
   bgColor?: string;
   hideOnMobile?:boolean; 
}

export const AuthContainer = styled.div`
display: flex;
width: 100%;
min-height: 100vh;
.logo-svg{
margin:2rem 2rem 0 2rem;
} 
#login{
    padding:6rem 0 0 0;
    @media(max-width:992px){
    padding:2rem 0 0 0; 
}

}


`

export const AuthColumn = styled.div<Props>`
width:50%;
background:${({bgColor})=>bgColor};
justify-content:center;
@media (max-width:992px){
    display:${({hideOnMobile})=>hideOnMobile ? 'none' : 'flex'};
    width: 100%;
}

`
export const AuthContent = styled.div<Props>`
display:flex;
flex-direction:column;
padding:2.5rem;
align-items:center;
justify-content:center;

@media (max-width:640px){
padding: 0 2.5rem;
}

`
export const AuthInner = styled.div<Props>`
width:100%;
max-width:650px;
display:flex;
flex-direction:column;
align-items:center;

`