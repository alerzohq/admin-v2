import styled from 'styled-components/macro'

export const TimelineAction = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1rem;
  &:last-of-type {
    div:after {
      content: '';
      display: none;
    }
  }
`
export const TimelineActionDate = styled.p`
  background: #c7e1ff;
  border-radius: 4px;
  padding: 6px 11px;
  width: 10rem;
  position: relative;
  text-align:center;
  &:after {
    content: '';
    position: absolute;
  }
`
export const TimelineActionData = styled.p`
  flex: 0.9;
  padding: 0.8rem 0;
  border-bottom: 1px solid #e8ebee;
`
export const TimelineActionIcon = styled.div`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 43%;
    border: 1px dashed #000000;
    bottom: 0;
    top: 16px;
    height: 64px;
  }
`
