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

  // > div:nth-child(1) {
  //   display: flex;
  //   flex-direction: column;
  //   gap: 30px;
  // }
  // > div:nth-child(2) {
  //   border-inline: 1px solid #e8ebee;
  // }
  .lightFont {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: ${Color.alerzoGray2};
  }
`
export const KycUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const KycUserImg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  img {
    border-radius: 50%;
    border: 1px solid #e8ebee;
  }
  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }
`
export const KycUserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const KycDocuments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-inline: 1px solid #e8ebee;
  img {
    object-fit: cover;
    padding-top: 16px;
  }
`
export const IDVerificationDocs = styled.div`
  margin: 0px -0.5rem;
`
export const AddressVerificationDocs = styled.div`
  margin: 0px -0.5rem;
`
export const ImageContainer = styled.div`
  display: flex;
  div {
    position: relative;
  }
  p {
    transform: rotate(270deg);
    position: absolute;
    right: 0px;
    top: 70%;
    left: 10px;
  }
`
