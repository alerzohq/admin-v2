import React from 'react'
import { AlerzoLogo, ErrorBoundaryIcon } from '../../assets/icons'
import { Color } from '../../assets/theme'
import Button from '../button'
import Text from '../text'
import { ErrorContainer } from './styles/error-boundary.styles'
import { useAppContext } from '../../context'

type ErrorBoundaryProps = {
  error: Error
  resetErrorBoundary: () => void
}

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorBoundaryProps) {
  const { state } = useAppContext()

  return (
    <div role="alert">
      <ErrorContainer>
        <AlerzoLogo
          className="logo"
          onClick={() => {}}
          height="25"
          width="150"
          color={Color.alerzoBlue}
        />

        <ErrorBoundaryIcon />
        <Text as="h2" data-testid="errorboundary" className="error-desc">
          You have run into an error while trying to perform this action
        </Text>
        <code>Error: {error?.message}</code>
        <Button
          radius="10px"
          fontSize="14px"
          width="200px"
          weight="700"
          onClick={resetErrorBoundary}
        >
          {state?.user ? 'Go Back To Dashboard' : 'Go to Login'}
        </Button>
      </ErrorContainer>
    </div>
  )
}
