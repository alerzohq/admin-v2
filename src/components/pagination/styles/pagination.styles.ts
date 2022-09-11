import styled from 'styled-components/macro';
import { Color } from '../../../assets/theme';


export const PaginationWrapper = styled.div`
display: flex;
align-items: center;
justify-content:center;
padding:2rem 0;

.paginate{
    display: flex;
    align-items: center;
    gap: .8rem;
    list-style-type: none; 
}
.page-item{
 color:${Color.alerzoDarkGray};
 font-weight:600;
 cursor: pointer;
 width:30px;
 height:30px;
 display: flex;
 align-items: center;
 justify-content: center;
}
.page-link{
    
}
.active-page{
    color:${Color.alerzoBlue};  
    background:#E6EEFF;
    display: flex;
    align-items: center;
    justify-content: center;
    width:30px;
    height:30px;
    border-radius:50%;
}
.previous-btn{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 150px;
    height: 45px;
    background: ${Color.alerzoWhite};
    border: 1px solid ${Color.alerzoBlue};
    border-radius: 10px;
    color:${Color.alerzoBlue};
    font-weight:600;
    cursor: pointer;
    margin-right:.5rem;
}
.next-btn{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 150px;
    height: 45px;
    background: ${Color.alerzoWhite};
    border: 1px solid ${Color.alerzoBlue};
    border-radius: 10px;
    color:${Color.alerzoBlue};
    font-weight:600;
    cursor: pointer;
    margin-left:.5rem;
}
.pagination-disabled a{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 150px;
    height: 45px;
    background: #F9FAFC;
    opacity: 0.5;
    border: 1px solid #A5B0B7;
    border-radius: 10px;
    color:#A5B0B7;
    font-weight:600;
    cursor: not-allowed;
   

}


`

