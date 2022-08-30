import React from 'react'
import { TopBarProps } from './type'
import Text from '../text'
import { TopbarWrapper } from './styles/topbar.styles'
import {useNavigate, useParams,} from 'react-router-dom'
import { ArrowBackIcon } from '../../assets/icons'

const TopBar = ({title}:TopBarProps) => {

  const params = useParams();
  let navigate = useNavigate();
  console.log({params})
  return (
    <TopbarWrapper>
     <>
       {Object.entries(params)?.length > 0 && (<ArrowBackIcon onClick={()=>navigate(-1)}/>)} <Text as={'h3'}>{title}</Text>
    </>
    </TopbarWrapper>
  )
}

export default TopBar