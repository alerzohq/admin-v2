import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type formProps = {
  width: string
  padding: string
  pr: string
  pt: string
  pl: string
  pb: string
  alignItems: string
  bgColor?: string
  gap?: string
  smDirections?: string
  xsDirections?: string
  labelFontSize?: string
  direction?: 'column' | 'row'
  wrap?: 'string'
}
type inputProps = {
  inputPadding?: string
}

export const FormContainer = styled.form<formProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  flex-wrap: ${({ wrap }) => wrap ?? 'nowrap'};
  width: ${({ width }) => (width ? width : '100%')};
  padding: ${({ padding }) => padding};
  background: ${({ bgColor }) => bgColor};

  @media (max-width: 640px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    padding: ${({ padding }) => (padding ? '2rem .2rem' : '')};
  }
`

export const Group = styled.div<formProps>`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : '10px')};
  align-items: ${({ alignItems }) => alignItems};
  padding-top: ${({ pt }) => pt};
  padding-left: ${({ pl }) => pl};
  padding-right: ${({ pr }) => pr};
  padding-bottom: ${({ pb }) => pb};
  padding: ${({ padding }) => padding};
  width: 100%;
  @media (max-width: 640px) {
    gap: 10px;
    flex-direction: ${({ smDirections }) => smDirections};
  }
  @media (max-width: 480px) {
    gap: 10px;
    flex-direction: ${({ smDirections }) => smDirections};
  }
`
export const Control = styled.div<formProps>`
  display: flex;
  flex-direction: column;

  padding-top: ${({ pt }) => (pt ? pt : '.8rem')};
  padding-left: ${({ pl }) => pl};
  padding-right: ${({ pr }) => pr};
  padding-bottom: ${({ pb }) => pb};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
`
export const Label = styled.label<formProps>`
  padding-top: ${({ pt }) => pt};
  padding-left: ${({ pl }) => pl};
  padding-right: ${({ pr }) => pr};
  padding-bottom: ${({ pb }) => (pb ? pb : '.5rem')};
  padding: ${({ padding }) => padding};
  font-size: ${({ labelFontSize }) => labelFontSize || '0.9rem'};
  color: ${Color.alerzoBlack};
  font-weight: 500;
`
export const Input = styled.div<inputProps>`
  width: 100%;
  display: flex;
  position: 'relative';
  input {
    height: 45px;
    border: 1px solid rgba(193, 202, 207, 0.5);
    color: #001928;
    border-radius: 10px;
    padding: ${({ inputPadding }) => inputPadding || '0 1rem'};
    outline: none;
    width: 100%;
   
  }
  input[type='text']:disabled {
    background: transparent;
    color: ${Color.alerzoGray2};
  }
  svg {
    position: absolute;
    padding: 1rem;
    margin: 0 !important;
  }
`
export const Error = styled.p``
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding:1rem 0;
  a {
    color: ${Color.alerzoBlue};
    padding:0;
  }

`
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 10px 0 0 0;
  .tag {
    background: #ffe0e0;
    display: flex;
    cursor: pointer;
    text-transform: capitalize;
    padding: 0.3rem 0.5rem;
    font-size: 0.8rem;
    border-radius: 30px;
    align-items: center;
    gap: 5px;
  }
`
export const Select = styled.div`
  width: 100%;
  display: flex;
  position: 'relative';
  select {
    height: 45px;
    border: 1px solid rgba(193, 202, 207, 0.5);
    opacity: 0.5;
    border-radius: 6px;
    padding: 0 1rem;
    outline: none;
    width: 100%;
  }
  select:disabled {
    background: transparent;
    color: ${Color.alerzoGray2};
  }
`
