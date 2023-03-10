import React, { ReactNode } from 'react'
import { TimelineIcon } from '../../assets/icons'
import { formatDate } from '../../utils/formatValue'
import {
  TimelineAction,
  TimelineActionData,
  TimelineActionDate,
  TimelineActionIcon,
  TimelineWrapper,
} from './TimelineElement.style'

export const TimelineElement = ({
  actions,
  top,
  borderColor,
  borderType,
}: {
  actions: { date?: string; action: string; icon?: ReactNode }[]
  top?: string
  borderColor?: string
  borderType?: string
}): JSX.Element => {
  return (
    <TimelineWrapper>
      {actions?.map((action: any, i) => (
        <TimelineAction key={i} actionsNum={actions.length}>
          {action?.date ? (
            <TimelineActionDate>
              {formatDate(Number(action.date), 'YYYY-MM-DD HH:mm:ss')}
            </TimelineActionDate>
          ) : null}
          <TimelineActionIcon
            top={top}
            borderType={borderType}
            borderColor={borderColor}
          >
            {action.icon ?? <TimelineIcon />}
          </TimelineActionIcon>
          <TimelineActionData>
            {typeof action?.action === 'string' ||
            (action?.action instanceof String && action.action.includes(','))
              ? action?.action.split(',').join(', ')
              : action.action}
          </TimelineActionData>
        </TimelineAction>
      ))}
    </TimelineWrapper>
  )
}
