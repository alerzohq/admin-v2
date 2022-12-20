import styled, { css } from 'styled-components/macro'

export const TimelineAction = styled.section<{ actionsNum: number }>`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1rem;

  ${({ actionsNum }) =>
    actionsNum === 1
      ? css`
          &:last-of-type {
            div {
              &:after {
                display: none !important;
              }
            }
          }
        `
      : css`
          :first-of-type {
            ${TimelineActionIcon} {
              &:after {
                height: calc(50% + 0.5rem) !important;
                top: calc(50% + 0.5rem) !important;
              }
            }
          }
          :last-of-type {
            ${TimelineActionIcon} {
              &:after {
                height: calc(50% - 0.5rem);
                bottom: calc(50% - 0.5rem);
              }
            }
          }
        `}
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
export const TimelineActionIcon = styled.div<{
  top?: string
  borderType?: string
  borderColor?: string
}>`
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
    border-width: 1px;
    border-style: ${({ borderType }) => borderType ?? 'dashed'};
    border-color: ${({ borderColor }) => borderColor ?? '#000000'};
    bottom: 0;
    top: ${({ top }) => top ?? '0'};
    height: calc(100% + 1rem);
  }
`
