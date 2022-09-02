import React from 'react'
import FallBack from '..'
import {render,screen} from '@testing-library/react'

test('Render fallback title correctly', ()=>{
  render(<FallBack title={''}/>)
  const textElement = screen.getByText(/user error/i);
  expect(textElement).toBeInTheDocument();
})