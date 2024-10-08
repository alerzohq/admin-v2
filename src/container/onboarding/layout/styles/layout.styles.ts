import styled from 'styled-components/macro'
import { Color } from '../../../../assets/theme'

type Props = {
  bgColor?: string
  hideOnMobile?: boolean
  p?: string
}

export const AuthContainer = styled.div<Props>`
  display: flex;
  width: 100%;
  min-height: 100vh;
  .logo-svg {
    margin: 2rem 2rem 0 2rem;
  }
  #login {
    padding: ${({ p }) => p ?? '6rem 0 0 0'};
    @media (max-width: 992px) {
      padding: 2rem 0 0 0;
    }
  }

  #otp-verification {
    padding: ${({ p }) => p ?? '6rem 0 0 0'};
    @media (max-width: 1240px) {
      form {
        width: 80%;
      }
    }
    @media (max-width: 1024px) {
      form {
        width: 90%;
      }
    }
    @media (max-width: 992px) {
      padding: 2rem 0 0 0;
      form {
        width: 70%;
      }
    }
    @media (max-width: 640px) {
      padding: 2rem 0 0 0;
      form {
        width: 100%;
      }
    }
  }
`

export const AuthColumn = styled.div<Props>`
  width: 50%;
  padding: 1rem;
  background: ${({ bgColor }) => bgColor};
  justify-content: center;
  @media (max-width: 992px) {
    display: ${({ hideOnMobile }) => (hideOnMobile ? 'none' : 'flex')};
    width: 100%;
  }
`
export const AuthContent = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    padding: 0 2.5rem;
  }
`
export const AuthInner = styled.div<Props>`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const AuthImage = styled.div`
  width: 500px;
  height: 500px;
  @media (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }
`
export const AuthLogo = styled.div`
  svg {
    width: 150px;
    background: ${Color.alerzoWhite};
    height: 25px;
    padding: 1rem;
    border-radius: 0px 0px 30px 0px;
  }
`
