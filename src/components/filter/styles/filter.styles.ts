import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

export const FilterWrapper = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  width:100%;
  /* padding: 0 1rem; */
  overflow: scroll;
  /* border-bottom: 0.8px solid #e8ebee; */
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
   
  }
`
export const FilterItems = styled.div`
  display: flex;
  gap: 20px;
  justify-content:space-between;
  overflow-y: visible;
  overflow-x: scroll;
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
  }
`
export const FilterInput = styled.input`
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
  white-space: nowrap;
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
