import styled from 'styled-components'
import { Color } from '../../../../assets/theme'

export const KycContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  height: 100%;
  > div {
    padding: 3rem;
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: left;

    p:first-of-type {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: ${Color.alerzoGray2};
    }
    p:last-of-type {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: ${Color.alerzoDarkGray};
    }
  }

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  > div:nth-child(2) {
    border-inline: 1px solid #e8ebee;
  }
  .lightFont {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: ${Color.alerzoGray2};
  }
`
