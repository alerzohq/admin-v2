import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

export type PaginationProps = {
  isMobile: boolean
}

export const PaginationWrapper = styled.div<PaginationProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: relative;
  gap: 2rem;

  .paginate {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    list-style-type: none;
    padding-left: 0 !important;
    border: 1px solid #d3d3d3;
    border-radius: 40px;
  }
  .page-item {
    color: ${Color.alerzoDarkGray};
    font-weight: 600;
    cursor: pointer;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    &:hover {
      color: ${Color.alerzoBlue};
      background: #e6eeff;
      border-radius: 50%;
    }
  }
  .page-link {
  }
  .active-page {
    color: ${Color.alerzoWhite};
    background: ${Color.alerzoBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  .previous-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: ${Color.alerzoWhite};
    border: 1px solid ${Color.alerzoBlue};
    border-radius: 50%;
    background: ${Color.alerzoBlue};
    font-weight: 600;
    cursor: pointer;
    svg,
    path {
      fill: ${Color.alerzoWhite} !important;
    }
  }
  .next-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: ${Color.alerzoWhite};
    border: 1px solid ${Color.alerzoBlue};
    border-radius: 50%;
    background: ${Color.alerzoBlue};
    font-weight: 600;
    cursor: pointer;

    /* margin-left: 0.5rem; */
    svg,
    path {
      fill: ${Color.alerzoWhite} !important;
    }
  }
  .previous {
    margin-left: -3rem !important;
  }
  .next {
    margin-right: -3rem !important;
  }
  .pagination-disabled a {
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: ${({ isMobile }) => (isMobile ? '40px' : '150px')}; */
    width: 35px;
    height: 35px;
    background: ${Color.alerzoWhite};
    opacity: 0.5;
    border: 1px solid #a5b0b7;
    border-radius: 50%;
    color: #a5b0b7;
    font-weight: 600;
    cursor: not-allowed;
    svg,
    path {
      fill: ${Color.alerzoGray2} !important;
    }
  }
`
export const Inner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  left: 0;
  &:first-of-type {
    margin-right: 3rem;
  }
  &:last-of-type {
    margin-left: 3rem;
  }
  .react-select__control {
    width: 60px !important;
    border-radius: 40px;
    height: 35px;
    &:focus {
      width: 60px !important;
      border-radius: 40px;
      height: 35px;
    }
  }
  .css-319lph-ValueContainer {
    padding: 0 0 0 3px !important;
  }

  .react-select__indicator {
    padding: 0 3px 0 0 !important;
    &:hover {
      padding: 0 3px 0 0 !important;
    }
  }

  .react-select__single-value {
    margin-left: 0px !important;
    margin-right: 0px !important;
    overflow: visible !important;
  }
`
