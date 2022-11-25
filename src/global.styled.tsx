import { createGlobalStyle } from 'styled-components'

import { Color } from './assets/theme'

const GlobalStyle = createGlobalStyle`



/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${Color.alerzoWhite};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${Color.alerzoBlue};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${Color.alerzoOrange};
}


.success{
  background: #34a8531a;
  color:#34A853;
  font-size: .8rem;
  border-radius: 5px;
  padding: 0.5rem;
  text-align: center;
  font-weight: 500;
  max-width:120px !important;
  text-transform: capitalize;
}
.unassigned{
  background: #D7E2E9;
  color:#000000;
  font-size: .8rem;
  border-radius: 5px;
  padding: 0.5rem;
  text-align: center;
  font-weight: 500;
  max-width:120px !important;
  text-transform: capitalize;
}
.pending{
  background: #f1a85a1a;
  color:#F1A85A;
  font-size: .8rem;
  border-radius: 5px;
  padding: 0.5rem;
  font-weight: 500;
  max-width:120px !important;
  text-align: center;
  text-transform: capitalize;
}
.failed{
  background: #ea43361a;
  color:#EA4336;
  font-size: .8rem;
  border-radius: 5px;
  padding: 0.5rem;
  text-align: center;
  font-weight: 500;
  text-transform: capitalize;
  max-width:120px !important;
}
.select-wrap{
  display:flex;
  justify-content:end;
}
.active{
  background: #34a8531a;
  color:#34A853;
  font-size: .8rem;
  border-radius: 5px;
  padding: 0.5rem;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  text-transform: capitalize;
}
.tableLink{
  cursor: pointer;
  color:${Color.alerzoBlue};
  font-weight:600;
  text-transform: capitalize;

}
#td-hover{
  cursor: pointer;
}

.underline{
  text-decoration: underline;
}
.w-50{
  width: 50% !important
}
.successText{
  color:#34A853 !important;
}
.center{
  text-align: center;
}
.end{
  text-align: end;
}
.dangerText{
  color:#EA4336 !important;
}
.pendingText{
  color:#F1A85A !important;
}
.download-btn {
  align-items: center;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  background: ${Color.alerzoWhite} !important;
  border: 1px solid ${Color.alerzoBlue} !important;
  border-radius: 10px;
  height: 45px !important;
  padding: 0 1rem;
  width: 200px !important;
  text-align: center;
  font-family: 'Gilmer';
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${Color.alerzoBlue} !important;
  font-weight: 500;
  cursor: pointer;
}
.mt-3{
  margin-top:3em
}
.checkbox{
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark{
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}
input ~ .checkmark {
  background-color: #ccc;
}

input:checked ~ .checkmark {
  background-color: ${Color.alerzoBlue};
}

.checkmark:after {
  content: "";
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
input{
  font-family:Gilmer;
  ::placeholder{
      font-family:Gilmer;
      color:#A5B0B7;
    }
}
.btn-blue{
  background: ${Color.alerzoBlue} !important;
  color: ${Color.alerzoBgColor} !important;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
`

export default GlobalStyle
