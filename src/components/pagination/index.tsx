import React from "react";
import { PaginationWrapper } from "./styles/pagination.styles";
import { PaginationProps } from "./type";
import ReactPaginate from "react-paginate";

const Pagination = ({
  data,
  setPageNumber,
}: PaginationProps) => {

const handlePageClick =({selected}:{selected: number})=>{
  setPageNumber((prev)=>({...prev,pageNumber: selected}))
}

  return (
    <>
     {data?.data?.length > 0 && (
    <PaginationWrapper>
    <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={data?.metadata?.pages}
        previousLabel="Back"
        containerClassName={'paginate'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        activeClassName={'active-page'}
        nextLinkClassName={'next-btn'}
        previousLinkClassName={'previous-btn'}
        disabledClassName={"pagination-disabled"}

      />
    </PaginationWrapper>)}



    </>
  );
};

export default Pagination;
