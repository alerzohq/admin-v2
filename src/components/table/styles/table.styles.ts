import styled from "styled-components/macro";
import { Color } from "../../../assets/theme";


type Props = {
  show?: boolean;
  isChecked?: boolean;
  pb?:string;
}

export const TableWrapper = styled.div`
  position: relative;
  @media (max-width: 768px) {
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; 
    -ms-overflow-style: none;
   ::-webkit-scrollbar { 
    width: 0;
    height: 0;
     }
  }
`;
export const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead {
    background: #f4f4f4;
    color: #373737;
    height: 65px;
    tr {
      text-align: left;
      font-size: 0.8rem;
      th {
        padding: 1rem;
        white-space: nowrap;
      }
      td {
        padding: 1rem;
        font-weight: 600;
        white-space: nowrap;
        
        svg{
          cursor: pointer;
        }
      }
    }
  }
  tbody{

    tr {
    border-bottom: 1px solid ${Color.alerzoLightGray};
    height: 65px;
    color: #373737;
    
    td {
      white-space: nowrap;
      font-size: 1rem;
      padding: .5rem 1rem;
      .live-product{
          display:flex;
          align-items: center;
          justify-content: center;
          width:70px;
          height:25px;
          background:${Color.alerzoSuccess};
          border-radius:20px;
          font-size:.9rem;
          &:before{
            content: "";
            height:6px;
            width:6px;
            border-radius:50%;
            background:${Color.alerzoBlack};
            margin-right:.5rem;
          }
        }
        .draft-product{
          display:flex;
          align-items: center;
          justify-content: center;
          width:70px;
          height:25px;
          font-size:.9rem;
          background:${Color.alerzoLightGray};
          border-radius:20px;
          &:before{
            content: "";
            height:6px;
            width:6px;
            border-radius:50%;
            background:${Color.alerzoBlack};
            margin-right:.5rem;
          }
        }
        svg{
          cursor: pointer;
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
