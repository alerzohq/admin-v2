import styled from 'styled-components'

export const CheckboxContainer = styled.div`
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

  .checkmark {
    position: absolute;
    top: 50%;
    left: 0;
    height: 25px;
    width: 25px;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    transform: translate(0%, -50%);
  }

  &:hover input ~ .checkmark {
    background-color: #0077ff90;
  }

  input:checked ~ .checkmark {
    background-color: #2196f3;
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
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
