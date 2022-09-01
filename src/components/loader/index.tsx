import React from 'react'
import { LoaderWrapper } from './styles/loader.styles'

const Loader = () => {
  return (
    <LoaderWrapper>
        <div className="lds-ellipsis">
          <div>
            </div>
            <div>
              </div>
              <div></div></div>
    </LoaderWrapper>
  )
}

export default Loader