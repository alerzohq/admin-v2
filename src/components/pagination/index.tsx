import React from 'react'
import { PaginationWrapper } from './styles/pagination.styles'
import { PaginationProps } from './type'
import ReactPaginate from 'react-paginate'
import { useWindowResize } from '../../hooks'

const Pagination = ({ data, setPageNumber }: PaginationProps) => {

  const {width}=useWindowResize();
  const mobileWidth=640

  const handlePageClick = ({ selected }: { selected: number }) => {
    setPageNumber((prev) => ({ ...prev, pageNumber: selected }))
  }



  return (
    <>
      {data?.data?.length > 0 && (
        <PaginationWrapper isMobile={width < mobileWidth}>
          <ReactPaginate
            breakLabel="..."
            nextLabel={width < mobileWidth ? ">":"Next"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={data?.metadata?.pages}
            previousLabel={width < mobileWidth ? "<":"Back"}
            containerClassName={'paginate'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            activeClassName={'active-page'}
            nextLinkClassName={'next-btn'}
            previousLinkClassName={'previous-btn'}
            disabledClassName={'pagination-disabled'}
          />
        </PaginationWrapper>
      )}
    </>
  )
}

export default Pagination
