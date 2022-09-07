import styled from 'styled-components/macro';
import { Color } from '../../../assets/theme';


export const PaginationWrapper = styled.div`
display: flex;
align-items: center;
justify-content:flex-end;
padding:2rem 0;

.paginateBtn{
    
    background: #F8FCFF;
    box-shadow: 0px 5px 8px rgba(193, 202, 207, 0.3);
    border-radius: 5px;
    border: none;
    height: 30px;
    width: 30px;
    cursor: pointer;
}
.pageCount{
display: flex;
align-items: center;
justify-content: center;
border: 0.8px solid rgba(232, 232, 232, 0.5);
border-radius: 5px;
height: 35px;
width: 35px;
font-weight:600;
color:${Color.alerzoDarkGray} ;

}
.totalCount{
    font-weight:600; 
    color:${Color.alerzoDarkGray} ;
}

`

// background: #F8FCFF;
// /* drop shadow 2 */

// box-shadow: 0px 5px 8px rgba(193, 202, 207, 0.3);
// border-radius: 5px;