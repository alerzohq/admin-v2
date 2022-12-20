import styled from 'styled-components/macro'
import { Color } from '../../../../../../assets/theme'

export const TimelineWrapper = styled.div`
  font-size: 14px;
`
export const Timeline = styled.ul`
  position: relative;
  padding-left: 45px;
  list-style: none;
  font-size:16px;
  span{
    color: #A5B0B7;
    font-size: 14px;
  }
  &:before {
    display: inline-block;
    content: '';
    position: absolute;
    top: 0;
    left: 15px;
    width: 10px;
    height: 100%;
    border-left: 2px solid ${Color.alerzoGray4};
  }
`
export const TimelineItem = styled.li`
  position: relative;
  counter-increment: list;

  height: 73px;
  strong {
    display: block;
  }
  &:not(:last-child) {
    padding-bottom: 20px;
  }

  &::before {
    display: inline-block;
    content: '';
    position: absolute;
    left: -30px;
    height: 100%;
    width: 10px;
  }

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: -37px;
    width: 12px;
    height: 12px;
    border: 2px solid ${Color.alerzoGray4};
    border-radius: 50%;
    background-color: ${Color.alerzoGray4};
  }
  &.last {
    &::before {
      border-left: 2px solid white;
    }
  }
  &.is-done {
    &::before {
      border-left: 2px solid ${Color.alerzoBlue};
    }
    &::after {
      content: '';
      font-size: 10px;
      color: #fff;
      text-align: center;
      border: 2px solid ${Color.alerzoBlue};
      background-color: ${Color.alerzoBlue};
    }
  }

  &.current {
    &::after {
      content: '';
      padding-top: 1px;
      width: 14px;
      height: 14px;
      top: -4px;
      left: -38px;
      font-size: 14px;
      text-align: center;
      color: green;
      border: 2px solid ${Color.alerzoBlue};
      background-color: white;
    }
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`
