import React from 'react'
import FallBack from '..'
import { render, screen } from '@testing-library/react'

test.skip('Render fallback title correctly', () => {
  render(<FallBack title={'user error'} />)
  const textElement = screen.getByText(/user error/i)
  expect(textElement).toBeInTheDocument()
})
