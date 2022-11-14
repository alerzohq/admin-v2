import  {render, screen} from '@testing-library/react'
import Pagination from '..'




describe('Pagination', () => {
    let mockFilterValues={
        count: 10,
        pageNumber: 0,
        status: '',
        query: '',
        from: '',
        to: ''
    }

    let mockData=[
        {name:'test'}
    ]
    const setFilterValues= ()=>{
        return mockFilterValues
    }
    
    test('render correctly with data',async()=>{
     render(<Pagination data={mockData} setPageNumber={setFilterValues}/>)
     const paginatedElement = await screen.findByRole('pagination')
     expect(paginatedElement).toBeInTheDocument();

    })
})