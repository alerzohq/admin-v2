import React from "react";
import { Color } from "../../assets/theme";
import Button from "../button";
import Stack from "../stack";
import { PaginationWrapper } from "./styles/pagination.styles";
import { PaginationProps } from "./type";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  data,
  setPageNumber,
  pageNumber,
  isPreviousData,
}: PaginationProps) => {
  return (
    <>
      {data?.data?.length > 0 && (
        <PaginationWrapper>
          <Stack
            width={"57%"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Button
              onClick={() => setPageNumber((next) => next + 1)}
              disabled={
                isPreviousData ||
                pageNumber + 1 === Number(data?.metadata?.pages) + 1
              }
              radius={"10px"}
              weight={"600"}
              width={"180px"}
              variant={"white"}
              color={Color.alerzoBlue}
              borderColor={Color.alerzoBlue}
            >
              Next
            </Button>

            <Stack
              width={"auto"}
              direction={"row"}
              alignItems={"center"}
              gap={"10px"}
              justifyContent={"space-between"}
            >
              <button
                className={"paginateBtn"}
                onClick={() => setPageNumber((prev) => Math.max(prev - 1, 0))}
                disabled={pageNumber === 0}
              >
                <IoIosArrowBack />
              </button>{" "}
              <div className={"pageCount"}>
                {Number(data?.metadata?.currentPage) + 1}
              </div>
              <button
                className={"paginateBtn"}
                onClick={() => {
                  if (!isPreviousData) {
                    setPageNumber((next) => next + 1);
                  }
                }}
                disabled={
                  isPreviousData ||
                  pageNumber + 1 === Number(data?.metadata?.pages) + 1
                }
              >
                <IoIosArrowForward />
              </button>
              <div className={"totalCount"}>
                {`of ${Number(data?.metadata?.pages) * 10}`}
              </div>
            </Stack>
          </Stack>
        </PaginationWrapper>
      )}
    </>
  );
};

export default Pagination;
