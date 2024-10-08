import React from 'react'
import { AlerzoLogoWhite } from '../../../assets/icons'
import { Color } from '../../../assets/theme'
import {
  AuthColumn,
  AuthContainer,
  AuthContent,
  AuthImage,
  AuthInner,
} from './styles/layout.styles'
import authImage from '../../../assets/images/svgs/auth-img.svg'
import { Text } from '../../../components'

const AuthLayout = ({
  children,
  p,
}: React.ComponentProps<'div'> & { p?: string }) => {
  return (
    <AuthContainer p={p}>
      <AuthColumn bgColor={Color.alerzoBlue} hideOnMobile>
        {/* <img src="/shago-logo-white.png" alt="logo" width={120} /> */}
        <AlerzoLogoWhite className="logo-svg" />
        <AuthContent>
          <AuthInner>
            <AuthImage>
              <img src={authImage} alt="auth-img" width="100%" height="100%" />
            </AuthImage>
            <Text
              as="h2"
              size="1.1rem"
              padding="1.5rem 5rem"
              textAlign={'center'}
              color={Color.alerzoWhite}
            >
              Manage all transactions in one secured place
            </Text>
          </AuthInner>
        </AuthContent>
      </AuthColumn>
      <AuthColumn>
        <AuthContent>
          <AuthInner>{children}</AuthInner>
        </AuthContent>
      </AuthColumn>
    </AuthContainer>
  )
}

export default AuthLayout
