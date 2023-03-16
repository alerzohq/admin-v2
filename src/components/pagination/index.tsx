import React from 'react'
import { Inner, PaginationWrapper } from './styles/pagination.styles'
import { PaginationProps } from './type'
import ReactPaginate from 'react-paginate'
import { useWindowResize } from '../../hooks'
import SelectInput from '../select-input'
import Text from '../text'
import { options } from '../../data/filter-data'
import { SelectOptions } from '../../@types'
import { Color } from '../../assets/theme'
import { BackIcon, NextIcon } from '../../assets/icons'

const Pagination = ({
  data,
  setPageNumber,
  initialPageCount,
}: PaginationProps) => {
  const { width } = useWindowResize()
  const mobileWidth = 640

  const handlePageClick = ({ selected }: { selected: number }) => {
    if (initialPageCount && initialPageCount === 1) {
      let newSelect = selected === 0 ? 1 : selected
      setPageNumber((prev) => ({ ...prev, pageNumber: newSelect + 1 }))
    } else {
      setPageNumber((prev) => ({ ...prev, pageNumber: selected }))
    }
  }

  const handlePageCount = (val: SelectOptions) => {
    let count = Number(val?.value)
    setPageNumber((prev) => ({ ...prev, count }))
  }

  return (
    <>
      {data?.data?.length > 0 && (
        <PaginationWrapper
          isMobile={width < mobileWidth}
          data-testid="paginate"
        >
          <Inner>
            <Text as={'p'} color={Color.alerzoGray2}>
              Show
            </Text>
            <SelectInput
              onChange={(val) => handlePageCount(val)}
              placeholder={'50'}
              value={'50'}
              options={options}
            />
          </Inner>

          <ReactPaginate
            breakLabel="..."
            nextLabel={<NextIcon />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={data?.metadata?.pages ?? 1}
            // previousLabel={width < mobileWidth ? <BackIcon /> :  <BackIcon />}
            previousLabel={<BackIcon />}
            containerClassName={'paginate'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            activeClassName={'active-page'}
            nextLinkClassName={'next-btn'}
            previousLinkClassName={'previous-btn'}
            disabledClassName={'pagination-disabled'}
          />

          <Inner>
            <Text as="p" color={Color.alerzoGray2}>
              Go to
            </Text>
          </Inner>
        </PaginationWrapper>
      )}
    </>
  )
}

export default Pagination
