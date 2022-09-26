import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

export const TopbarWrapper = styled.div`
  height: 90px;
  background: ${Color.alerzoWhite};
  display: flex;
  align-items: center;
  padding: 0 1.8rem;
  border-bottom: 0.8px solid #e8ebee;
  position: sticky;
  top: 0;
  z-index: 1;
  svg {
    cursor: pointer;
  }
  h3 {
    color: ${Color.alerzoBlack};
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  @media (max-width: 640px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`
export const TopbarFilters = styled.div`
  display: flex;
  gap: 20px;
  overflow-y: visible;
  overflow-x: clip;
  scrollbar-width: none;
  -ms-overflow-style: none;
  .download-btn {
    align-items: center;
    display: flex;
    justify-content: center;
    white-space: nowrap;
    background: ${Color.alerzoWhite};
    border: 1px solid ${Color.alerzoBlue};
    border-radius: 10px;
    height: 45px;
    padding: 0 1rem;
    width: 200px;
    text-align: center;
    font-family: 'Gilmer';
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    color: ${Color.alerzoBlue};
    font-weight: 500;
    cursor: pointer;
  }
  
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media (max-width: 768px) {
    gap: 10px;
    overflow: scroll;
  }
`
export const Filter = styled.input`
  background: ${Color.alerzoWhite};
  border: 1px solid rgba(193, 202, 207, 0.5);
  border-radius: 10px;
  height: 45px;
  padding: 0 1rem;
  width: 250px;
  ::placeholder {
    font-family: 'Gilmer';
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    color: ${Color.alerzoDarkGray2};
  }

  outline: none;
  @media (max-width: 1240px) {
    max-width: 100px;
  }
`
export const SelectInput = styled.select`
  background: ${Color.alerzoWhite};
  border: 1px solid rgba(193, 202, 207, 0.5);
  border-radius: 10px;
  height: 45px;
  padding: 0 1rem;
  max-width: 200px;
  ::placeholder {
    font-family: 'Gilmer';
    font-style: normal;
    font-size: 12px;
    line-height: 17px;
    color: ${Color.alerzoGray2};
  }

  outline: none;
`
