import styled from 'styled-components/macro'
import { Color } from '../../assets/theme'

export const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: scroll;
  overflow-y: hidden;
`
export const DataTableTHead = styled.thead`
  background: ${Color.alerzoGray3};
  color: #001928;
  height: 60px;
  td {
    padding: 1rem;
  }
`
export const DataTableHeadRow = styled.tr`
  tr {
    text-align: left;
  }
`
export const DataTableHead = styled.th`
  text-align: left;
  font-size: 0.8rem;
  text-transform: capitalize;
  font-weight: 500;
  font-weight: 600;
  white-space: nowrap;
  &:first-child {
    border-top-left-radius: 20px;
    padding-left: 1rem;
  }
  &:last-child {
    border-top-right-radius: 20px;
    text-align: left;
    padding-left: 2rem;
    padding-right: 1rem;
  }
`
export const DataTableBody = styled.tbody`
  margin: 0 2rem;
`
export const DataTableBodyRow = styled.tr`
  border: 0.8px solid #e8ebee;
  border-right: none;
  border-left: 0;
  height: 60px;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  color: #373737;
  td {
    font-size: 0.9rem;
    font-weight: 500;
    white-space: nowrap;
    min-width: 200px;
    &:first-letter {
      text-transform: capitalize;
    }
    &:first-child {
      padding-left: 1rem;
    }
    &:last-child {
      padding-right: 1rem;
      text-align: left;
      padding-left: 2rem;
    }
    div {
      &:first-letter {
        text-transform: capitalize;
      }
    }
  }
`
