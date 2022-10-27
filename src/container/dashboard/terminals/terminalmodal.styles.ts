import styled from 'styled-components/macro'


export const TerminalModal = styled.div`
  display: flex;
  gap: 4%;
  width: 100%;
  text-align: center;
  svg {
    cursor: pointer;
  }
`
export const TerminalModalChild = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  svg {
    cursor: pointer;
  }
  .svg-container {
    position: relative;
  }
  .svg-container.disabled {
  }
  .svg-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`
