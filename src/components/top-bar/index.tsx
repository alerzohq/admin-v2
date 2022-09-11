import React,{useEffect, useState} from 'react'
import { TopBarProps } from './type'
import Text from '../text'
import { TopbarWrapper,TopbarFilters,Filter } from './styles/topbar.styles'
import {useNavigate, useParams,} from 'react-router-dom'
import { ArrowBackIcon } from '../../assets/icons'
import DateRange from '../date-range'
import Stack from '../stack'
import { SelectInputProps } from '../../@types'
import SelectInput from '../select-input'
import { options, optionsAllPlatform } from '../../data/select-data'



const TopBar = ({title,showFilters,setFilterValues}:TopBarProps) => {

  let params = useParams();
  let navigate = useNavigate();
  const [status,] =useState<SelectInputProps>(null)
  const [values,setValues ] =useState({
   search:'',
   status:'',
   allPlatform:'',
  })
 
  const {search,} = values
  

  useEffect(() => {
    if(showFilters){
      setFilterValues(search);
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search])


  const handleChange = (selectedOption:{[key: string]:any}) => {
    // setStatus(selectedOption)
    console.log(selectedOption)
  };



  return (
    <>
    <TopbarWrapper>
     <Stack  justifyContent={'space-between'} direction={'row'}>
       <Stack direction={'row'} width={'auto'} alignItems={'center'}>  {Object.entries(params)?.length > 0 && (<ArrowBackIcon onClick={()=>navigate(-1)}/>)} <Text as={'h3'}>{title}</Text></Stack>
       {showFilters &&(
        <TopbarFilters>
        <Filter value={search} onChange={(e)=>{setValues({...values,search:e.target.value})}} placeholder={'Search by reference number..'}/>
        <DateRange />
        <SelectInput placeholder={'All Platform'}
          onChange={handleChange}
         value={''} options={optionsAllPlatform}/> 


         <SelectInput placeholder={'Status'}
          onChange={handleChange}
         value={status} options={options}/> 
         
         <button id={'download-btn'}>
           {'Download CSV'}
         </button>
        </TopbarFilters>
 
       )}
      </Stack>
      
    </TopbarWrapper>
   
     </>
  )
}

export default TopBar