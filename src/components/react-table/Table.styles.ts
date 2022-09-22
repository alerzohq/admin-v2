import styled from 'styled-components/macro'
import { Color } from '../../assets/theme'

export const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  }
`
export const DataTableTHead = styled.thead`
  background: ${Color.alerzoGray3};
  color: #001928;
  height: 60px;
    td {
      padding: 1rem;
    }
  }
`
export const DataTableHeadRow = styled.tr`
tr {
  text-align: left;
  font-size: 0.9rem;
`
export const DataTableHead = styled.th`
  text-align: left;
  &:first-child {
    padding-left: 1rem;
  }
  &:last-child {
    padding-right: 1rem;
    text-align: center;
  }
  font-weight: 600;
  &:first-child {
    border-top-left-radius: 20px;
  }
  &:last-child {
    border-top-right-radius: 20px;
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
  font-size: 1rem;
  font-weight: 500;
  max-width: 200px;
  &:first-child {
    padding-left: 1rem;
  }
  &:last-child {
    padding-right: 1rem;
    text-align: center;
  }
  div {
    text-transform: capitalize;
  }`
