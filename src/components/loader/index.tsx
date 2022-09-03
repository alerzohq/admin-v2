import React from 'react'
import { LoaderWrapper,LoaderIndicator } from './styles/loader.styles'
import { LoaderProps } from './type'
import Text from '../text'

const Loader = ({color,text}:LoaderProps) => {
  return (
    <LoaderWrapper >
     {text &&  <Text as={'h4'} padding={'0 0 .5rem 0'}>{text}</Text>}
    <LoaderIndicator color={color}>

        <div className="lds-ellipsis">
          <div>
            </div>
            <div>
              </div>
              <div></div></div>
    </LoaderIndicator>
   </LoaderWrapper>
  )
}

export default Loader