import styled from "styled-components";
import { Color } from "../../../../../assets/theme";

type inputProps = {
    inputPadding?: string
}
export const FileInput = styled.div<inputProps>`
  width: 100%;
  display: flex;
  flex-direction:row;
  position: 'relative';
  justify-content: space-between;
  height: 45px;
  border-radius: 10px;
  background: #F1F8FF;
  border: 1px solid #C8E3FF;
  button {
    background-color:transparent;
    border: none;
    color: ${Color.alerzoBlue}
  }
  input {
    padding: ${({ inputPadding }) => inputPadding || '0 1rem'};
    outline: none;
    width: 100%;
    display: none;
    
  }
  input[type='text']:disabled {
    background: transparent;
    color: ${Color.alerzoGray2};
  }
  svg {
 
    padding: 1rem;
    margin: 0 !important;
  }
`