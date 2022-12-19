import styled, { css } from 'styled-components/macro'

export const TimelineAction = styled.div<{ actionsNum: number }>`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1rem;
  ${({ actionsNum }) =>
    actionsNum === 1 &&
    css`
      &:first-of-type {
        div:after {
          display: none;
        }
      }
    `}
  &:first-of-type {
    div:after {
      height: calc(50% + 0.5rem) !important;
      top: calc(50% + 0.5rem) !important;
    }
  }
  &:last-of-type {
    div:after {
      height: calc(50% - 0.5rem);
      bottom: calc(50% - 0.5rem);
    }
  }
`
export const TimelineActionDate = styled.p`
  background: #c7e1ff;
  border-radius: 4px;
  padding: 6px 11px;
  width: 10rem;
  position: relative;
  text-align: center;
`
export const TimelineActionData = styled.p`
  flex: 0.9;
  padding: 0.8rem 0;
  border-bottom: 1px solid #e8ebee;
  overflow: auto;
`
export const TimelineActionIcon = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  svg {
    z-index: 99;
  }
  &:after {
    content: '';
    position: absolute;
    left: 43%;
    border: 1px dashed #000000;
    bottom: 0;
    top: 0;
    height: calc(100% + 1rem);
  }
`
