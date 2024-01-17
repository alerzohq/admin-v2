import styled from 'styled-components'
import { Color } from '../../../assets/theme'

type Props = {
  position?: string
}

export const CheckboxContainer = styled.div<Props>`
  position: ${({ position }) => position};
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    z-index: 99;
    position: absolute;
    top: 13%;
    left: 0;
    height: 25px;
    width: 25px;
  }
  small {
    padding-left: 1.8rem;
  }
  .checkmark {
    position: absolute;
    top: 50%;
    left: 0;
    height: 20px;
    width: 20px;
    background: ${Color.alerzoWhite};
    border: 1px solid ${Color.alerzoLightGray4};
    border-radius: 5px;
    transform: translate(0%, -50%);
    margin-right: 0.5rem;
  }

  &:hover input ~ .checkmark {
    /* background-color: #0077ff90; */
    border: 2px solid ${Color.alerzoBlue};
  }

  input:checked ~ .checkmark {
    background-color: ${Color.alerzoBlue};
    border: 2px solid ${Color.alerzoBlue};
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 6px;
    top: 2px;
    width: 4px;
    height: 9px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
