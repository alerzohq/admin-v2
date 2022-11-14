import { render, screen } from '@testing-library/react'
import Button from '..'

describe('Button', () => {
  test('text render correctly', () => {
    render(<Button onClick={() => {}}>Click me</Button>)
    const buttonElement = screen.getByText(/click me/i)
    expect(buttonElement).toBeInTheDocument()
  })

  test('loading not render button text', () => {
    let loading = true
    render(
      <Button onClick={() => {}} loading={loading}>
        Click me
      </Button>
    )
    const buttonElement = screen.queryByText(/click me/i)
    expect(buttonElement).not.toBeInTheDocument()
  })
})
