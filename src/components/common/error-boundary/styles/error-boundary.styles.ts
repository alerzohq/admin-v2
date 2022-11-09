import styled from 'styled-components/macro'
import { Color } from '../../../../assets/theme'

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5rem 3rem;
    align-items: center;
    h2{
        font-size: 1rem;
        font-weight: 400;
        color: ${Color.alerzoDarkGray};
        margin: 2rem 0 2rem 0;
    }
   img{
        font-size: 1rem;
        font-weight: 400;
        color: ${Color.alerzoDarkGray};
        width: 465px;
        margin-top: 4rem ;
        @media (max-width: 604px) {
            width: 365px;
        }
        @media (max-width: 420px) {
            width: 250px;
        }
    }
    button{
        width:20%;
        @media (max-width: 900px) {
            width:25%;
        }
        @media (max-width: 768px) {
            width: 30%;
        }
        @media (max-width: 604px) {
            width: 45%;
        }
        @media (max-width: 420px) {
            width: 100%;
        }
    }

`

