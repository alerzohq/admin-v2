import React from 'react'
import { AlerzoLogo } from '../../../assets/icons'
import { Color } from '../../../assets/theme'
import { AuthColumn, AuthContainer,AuthContent, AuthInner } from './styles/layout.styles'
import authImage from '../../../assets/images/svgs/auth-img.svg'
import {Text} from '../../../components'



const AuthLayout = ({children}:React.ComponentProps<'div'>) => {
  return (
    <AuthContainer>
        <AuthColumn bgColor={Color.alerzoBlue} hideOnMobile>
        <AlerzoLogo />
            <AuthContent>        
               <AuthInner >
               <img src={authImage} alt={'auth-img'} width={'80%'}/>
                <Text as={'h2'} color={Color.alerzoWhite} >
                   Monitor Record and Reconcile
               </Text>
               <Text as={'p'} 
                    padding={'0 2rem'}
                    color={Color.alerzoWhite} align={'center'}>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Risus at ultrices mi tempus.`}
               </Text>              
             </AuthInner>        
            </AuthContent>
        </AuthColumn>
        <AuthColumn>
            {children}
        </AuthColumn>
    </AuthContainer>
  )
}

export default AuthLayout