import React,{ useState} from 'react'
import { TopBarProps } from './type'
import Text from '../text'
import { TopbarWrapper,TopbarFilters,Filter } from './styles/topbar.styles'
import {useNavigate, useParams,} from 'react-router-dom'
import { ArrowBackIcon } from '../../assets/icons'
import DateRange from '../date-range'
import Stack from '../stack'


const TopBar = ({title,showFilters}:TopBarProps) => {

  let params = useParams();
  let navigate = useNavigate();
  const [values, ] =useState({
   search:'',
  })
 
  const {search} = values
  

  return (
    <>
    <TopbarWrapper>
     <Stack  justifyContent={'space-between'} direction={'row'}>
       <Stack direction={'row'} width={'auto'} alignItems={'center'}>  {Object.entries(params)?.length > 0 && (<ArrowBackIcon onClick={()=>navigate(-1)}/>)} <Text as={'h3'}>{title}</Text></Stack>
       {showFilters &&(
        <TopbarFilters>
        <Filter value={search} placeholder={'Search'}/>
        <DateRange />
        <Filter placeholder={'All Platforms'}/>
        <Filter placeholder={'Status'}/>
        <button id={'download-btn'}>
           {'Download'}
         </button>
        </TopbarFilters>
 
       )}
      </Stack>
      
    </TopbarWrapper>
   
     </>
  )
}

export default TopBar