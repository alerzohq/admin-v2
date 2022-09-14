import styled from "styled-components/macro";
import { Color } from "../../../assets/theme";


type Props = {
  show?: boolean;
  isChecked?: boolean;
  pb?:string;
}

export const TableWrapper = styled.div`
  position: relative;
  width:100%;

    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; 
    -ms-overflow-style: none;
   ::-webkit-scrollbar { 
    width: 0;
    height: 0;
     }
  
`;
export const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead {
    background: ${Color.alerzoGray3};
    color: #001928;
    height: 60px;
   
    tr {
      text-align: left;
      font-size: .9rem;
    
      th {
        padding: 1rem;
        white-space: nowrap;
        font-weight: 600;
        &:first-child{
          border-top-left-radius:20px;   
        }
        &:last-child{
          border-top-right-radius: 20px;
        }
      }
      td {
        padding: 1rem;
        
        white-space: nowrap;
        
        svg{
          cursor: pointer;
        }
      }
    }
  }
  tbody{
    margin:0 2rem;
    tr {
    border: 0.8px solid #E8EBEE;
    border-right: none;
    border-left: 0;
    height: 60px;
   
    color: #373737;
    td {
      white-space: nowrap;
      font-size: .9rem;
      font-weight: 500;
      padding: .5rem 1rem;
      div{
        text-transform: capitalize;
      }

    }
  }
  }
`;

export const TableFilterBox = styled.div<Props>`
display:flex;
justify-content:space-between;
align-items:center;
padding-bottom: ${({pb})=>pb ?pb :'2rem'};
@media(max-width:480px){
    flex-direction: column;
    gap: 10px;
}
`

export const TableCheckBox = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid ${({isChecked})=>isChecked ? Color.alerzoBlack:'#ababab'};
  background:${({isChecked})=>isChecked ? Color.alerzoBlack:'transparent'};
  border-radius: 4px;
  cursor: pointer;
`;

export const TableFilterInner = styled.div`
input{
  width:350px;
}

@media(max-width:640px){
  width: 100%;
  input{
  width:100%;
}
}

`
export const PopUpWrapper= styled.div<Props>`
right: 1rem;
padding:.5rem;
font-size:.85rem; 
position:absolute;
width:160px;
opacity: ${({show})=>show ? '1' : '0'};
max-height:${({show})=>show ?'400px':'0'}; 
background:${Color.alerzoWhite};
overflow: hidden;
top:16.1rem;
transition: 0.5s;
transform: ${({show})=>show?'translateY(0)':'translateY(50%)'};
`
export const PopUpStack = styled.div`
padding: .5rem 1rem;
p{
  padding: .5rem 0;
  cursor: pointer;
}
`
