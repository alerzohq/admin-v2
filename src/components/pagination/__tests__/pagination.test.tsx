import { render, screen } from '@testing-library/react'
import Pagination from '..'

describe('<Pagination />', () => {
  let mockFilterValues = {
    count: 10,
    pageNumber: 0,
    status: '',
    query: '',
    from: '',
    to: '',
  }

  let mockData = { data: [{ name: 'test' }] }
  const setFilterValues = () => {
    return mockFilterValues
  }

  test('render correctly with data', () => {
    render(<Pagination data={mockData} setPageNumber={setFilterValues} />)
    const paginatedElement = screen.getByTestId('paginate')
    expect(paginatedElement).toBeInTheDocument()
  })

  test('not to render', () => {
    render(<Pagination data={[]} setPageNumber={setFilterValues} />)
    const paginatedElement = screen.queryByTestId('paginate')
    expect(paginatedElement).not.toBeInTheDocument()
  })
})
