import styled from 'styled-components/macro'
import { Color } from '../../../../../../assets/theme'

export const ModalForm = styled.div`
  width: 100%;
  .form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
  }
  button {
    width: 100%;
    margin-top: 1.5rem;
  }

  @media (max-width: 700px) {
    .form {
      grid-template-columns: 1fr;
    }
  }
`
