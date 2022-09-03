import React from 'react'
import { TopBarProps } from './type'
import Text from '../text'
import { TopbarWrapper,TopbarFilters } from './styles/topbar.styles'
import {useNavigate, useParams,} from 'react-router-dom'
import { ArrowBackIcon } from '../../assets/icons'

const TopBar = ({title,showFilters}:TopBarProps) => {

  let params = useParams();
  let navigate = useNavigate();

  return (
    <TopbarWrapper>
     <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
       {Object.entries(params)?.length > 0 && (<ArrowBackIcon onClick={()=>navigate(-1)}/>)} <Text as={'h3'}>{title}</Text>
       {showFilters &&(
        <TopbarFilters>
        <input placeholder={'Search'}/>
        <input placeholder={'Select Date'}/>
        <input placeholder={'All Platforms'}/>
        <input placeholder={'Status'}/>
        <input placeholder={'Download'}/>
        </TopbarFilters>
 
       )}
          </div>
    </TopbarWrapper>
  )
}

export default TopBar