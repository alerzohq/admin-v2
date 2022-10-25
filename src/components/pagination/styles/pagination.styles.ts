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

  .paginate {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    list-style-type: none;
    padding-left: 0 !important;
  }
  .page-item {
    color: ${Color.alerzoDarkGray};
    font-weight: 600;
    cursor: pointer;
    width: 30px;
    height: 30px;
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
    color: ${Color.alerzoBlue};
    background: #e6eeff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .previous-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ isMobile }) => (isMobile ? '50px' : '150px')};
    height: 45px;
    background: ${Color.alerzoWhite};
    border: 1px solid ${Color.alerzoBlue};
    border-radius: 10px;
    color: ${Color.alerzoBlue};
    font-weight: 600;
    cursor: pointer;
    margin-right: 0.5rem;
  }
  .next-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ isMobile }) => (isMobile ? '50px' : '150px')};
    height: 45px;
    background: ${Color.alerzoWhite};
    border: 1px solid ${Color.alerzoBlue};
    border-radius: 10px;
    color: ${Color.alerzoBlue};
    font-weight: 600;
    cursor: pointer;
    margin-left: 0.5rem;
  }
  .pagination-disabled a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ isMobile }) => (isMobile ? '50px' : '150px')};
    height: 45px;
    background: #f9fafc;
    opacity: 0.5;
    border: 1px solid #a5b0b7;
    border-radius: 10px;
    color: #a5b0b7;
    font-weight: 600;
    cursor: not-allowed;
  }
`
