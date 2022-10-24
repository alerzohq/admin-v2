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
  max-width:120px;
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
  max-width:120px;
  text-transform: capitalize;
}
.pending{
  background: #f1a85a1a;
  color:#F1A85A;
  font-size: .8rem;
  border-radius: 5px;
  padding: 0.5rem;
  font-weight: 500;
  max-width:120px;
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
  max-width:120px;
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
`

export default GlobalStyle
