import { useNavigate } from 'react-router-dom'
import { AlerzoLogo } from '../../../assets/icons'
import { Color } from '../../../assets/theme'
import Button from '../../button'
import { ErrorContainer } from './styles/error-boundary.styles'
import errorImg from '../../../assets/images/pngs/error.png'

type ErrorBoundaryProps = {
  error: any
  resetErrorBoundary: any
}

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorBoundaryProps) {
  return (
    <div role="alert">
      <ErrorContainer>
        <AlerzoLogo
          className={'logo'}
          onClick={() => {}}
          height={'25'}
          width={'150'}
          color={Color.alerzoBlue}
        />
        <img src={errorImg} alt="signout" />
        <h2 data-testid="errorboundary">{error?.message}</h2>
        <Button
          radius="10px"
          fontSize="14px"
          weight="700"
          onClick={resetErrorBoundary}
        >
          Go Back To Dashboard
        </Button>
      </ErrorContainer>
    </div>
  )
}
