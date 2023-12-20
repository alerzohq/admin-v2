import styled from 'styled-components/macro'
type containerProps = {
  padding?: string
}

export const ContainerWrapper = styled.div<containerProps>`
  max-width: 1600px;
  margin: 0 auto;
  animation: fadeIn 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  padding: ${({ padding }) => padding || '2rem'};
  @media (max-width: 640px) {
    padding: 1.5rem 1rem;
  }
`
