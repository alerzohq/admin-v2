import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

export const Line = styled.div`
  .loader {
    overflow: hidden;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    z-index: 100000;
  }

  .loading-animated {
    height: 5px;
    width: 100%;
    background: ${Color.alerzoBlue};
  }

  .loader-element:before {
    content: '';
    display: block;
    background-color: #0077ff;
    height: 3px;
    width: 0;
    animation: getWidth 0.5s ease-in infinite;
  }

  @keyframes getWidth {
    100% {
      width: 100%;
    }
  }
`
