import styled from 'styled-components/macro'
import { Color } from '../../../../assets/theme'

export const CardWidgetWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const CardWidgetItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.3rem;
  flex: 0 0 23%;
  border-radius: 20px;
  height: 150px;
  width: 200px;
  background: ${Color.alerzoGray3};
  border: 1px solid ${Color.alerzoGray3};
  svg {
    margin-bottom: 0.7rem;
  }
  small {
    padding: 0 0.5rem;
    text-align: center;
  }
  small {
    color: ${Color.alerzoDarkGray};
  }
  h3 {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    flex: 0 0 48%;
    margin-bottom: 1rem;
  }
  @media (max-width: 420px) {
    flex: 0 0 100%;
  }
`
