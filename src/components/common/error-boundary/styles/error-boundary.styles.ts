import styled from 'styled-components/macro'
import { Color } from '../../../../assets/theme'

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5rem 3rem;
  align-items: center;
  .error-desc {
    font-size: 1rem;
    font-weight: 400;
    color: ${Color.alerzoDarkGray};
    margin: 2rem 0 0 0;
  }
  code {
    width: 100%;
    text-align: center;
    max-width: 400px;
    margin: 1rem 0;
    background: ${Color.alerzoBlue4};
    border-radius: 5px;
    padding: 1rem;
  }
  .error-boundary-img {
    font-size: 1rem;
    font-weight: 400;
    color: ${Color.alerzoDarkGray};
    width: 350px;
    margin-top: 4rem;
  }
`
