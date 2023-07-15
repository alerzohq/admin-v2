import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type Props = {
  show?: boolean
  isChecked?: boolean
  pb?: string
  bgColor?: string
  wrapperPb?: string
  layout?: string
}

export const TableWrapper = styled.div<Props>`
  position: relative;
  width: 100%;
  padding-bottom: ${({ wrapperPb }) => wrapperPb};
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  /* &:before{
    content: "";
    height:100%;
    width: 100%;
    position: absolute;
    z-index:1;
    background:rgba(255,255,255, 0.5) ;
  } */
`
export const DataTable = styled.table<Props>`
  width: 100%;
  border-collapse: collapse;
  table-layout: ${({ layout }) => (layout ? layout : 'auto')};
  thead {
    background: ${({ bgColor }) => (bgColor ? bgColor : Color.alerzoGray3)};
    color: #001928;
    height: 60px;

    tr {
      text-align: left;
      font-size: 0.8rem;

      th {
        padding: 1rem;
        white-space: nowrap;
        font-weight: 600;
        &:first-child {
          border-top-left-radius: 20px;
        }
        &:last-child {
          border-top-right-radius: 20px;
        }
      }
      td {
        padding: 1rem;

        white-space: nowrap;

        svg {
          cursor: pointer;
        }
      }
    }
  }
  tbody {
    margin: 0 2rem;
    tr {
      border: 0.8px solid ${Color.alerzoGrayBorder};
      border-right: none;
      border-left: 0;
      border-bottom:none;
      height: 60px;

      color: #373737;
      td {
        white-space: nowrap;
        font-size: 0.9rem;
        font-weight: 500;
        padding: 0.5rem 1rem;
      }
    }
  }
`

export const TableFilterBox = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ pb }) => (pb ? pb : '2rem')};
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`

export const TableCheckBox = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid
    ${({ isChecked }) => (isChecked ? Color.alerzoBlack : '#ababab')};
  background: ${({ isChecked }) =>
    isChecked ? Color.alerzoBlack : 'transparent'};
  border-radius: 4px;
  cursor: pointer;
`

export const TableFilterInner = styled.div`
  input {
    width: 350px;
  }

  @media (max-width: 640px) {
    width: 100%;
    input {
      width: 100%;
    }
  }
`
export const PopUpWrapper = styled.div<Props>`
  right: 1rem;
  padding: 0.5rem;
  font-size: 0.85rem;
  position: absolute;
  width: 160px;
  opacity: ${({ show }) => (show ? '1' : '0')};
  max-height: ${({ show }) => (show ? '400px' : '0')};
  background: ${Color.alerzoWhite};
  overflow: hidden;
  top: 16.1rem;
  transition: 0.5s;
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(50%)')};
`
export const PopUpStack = styled.div`
  padding: 0.5rem 1rem;
  p {
    padding: 0.5rem 0;
    cursor: pointer;
  }
`

export const ActionButton=styled.button`
border:1px solid ${Color.alerzoBlueBorder};
cursor:pointer;
color:${Color.alerzoDeepBlue};
background: ${Color.alerzoBlue7};
border-radius: 5px;
padding:8px 12px;

`

