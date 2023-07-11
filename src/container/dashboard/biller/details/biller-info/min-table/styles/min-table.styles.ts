import styled from "styled-components/macro";
import { Color } from "../../../../../../../assets/theme";

export const MinTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout:  'auto';
  thead {
    background: ${Color.alerzoGray3};
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
        position: relative;
        &:first-child::before{
            width:0px;
        };
        &:before{
        content:'';
        position: absolute;
        height:80%;
        width:1px;
        background:${Color.alerzoGrayBorder};
        top: 10%;
        left: 0;

        }
      }
    }
  }
`