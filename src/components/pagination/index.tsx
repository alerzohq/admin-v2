import React from 'react'
import { PaginationWrapper } from './styles/pagination.styles'
import { PaginationProps } from './type'
import ReactPaginate from 'react-paginate'
import { useWindowResize } from '../../hooks'
import SelectInput from '../select-input'
import { options } from '../../data/filter-data'
import { SelectOptions } from '../../@types'

const Pagination = ({ data, setPageNumber }: PaginationProps) => {
  const { width } = useWindowResize()
  const mobileWidth = 640

  const handlePageClick = ({ selected }: { selected: number }) => {
    setPageNumber((prev) => ({ ...prev, pageNumber: selected }))
  }

  const handlePageCount = (val: SelectOptions) => {
    let count = Number(val?.value)
    setPageNumber((prev) => ({ ...prev, count }))
  }

  return (
    <>
      {data?.data?.length > 0 && (
        <PaginationWrapper isMobile={width < mobileWidth}>
          <SelectInput
            onChange={(val) => handlePageCount(val)}
            placeholder={'10'}
            value={'10'}
            options={options}
          />
          <ReactPaginate
            breakLabel="..."
            nextLabel={width < mobileWidth ? '>' : 'Next'}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={data?.metadata?.pages}
            previousLabel={width < mobileWidth ? '<' : 'Back'}
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
