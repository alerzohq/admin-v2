import styled from 'styled-components/macro'
type containerProps = {
  padding?: string
}

export const ContainerWrapper = styled.div<containerProps>`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({padding})=>padding || '2rem'};
  @media (max-width: 640px) {
    padding: 1.5rem 1rem;
  }
`
