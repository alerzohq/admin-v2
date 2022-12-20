import React, { ReactNode } from 'react'
import { TimelineIcon } from '../../assets/icons'
import { formatDate } from '../../utils/formatValue'
import {
  TimelineAction,
  TimelineActionData,
  TimelineActionDate,
  TimelineActionIcon,
} from './TimelineElement.style'

export const TimelineElement = ({
  actions,
  top,
}: {
  actions: { date?: string; action: string; icon?: ReactNode }[]
  top?: string
}): JSX.Element => {
  return (
    <>
      {actions?.map((action: any, i) => (
        <TimelineAction key={i} actionsNum={actions.length}>
          {action?.date ? (
            <TimelineActionDate>
              {formatDate(Number(action.date), 'YYYY-MM-DD HH:mm:ss')}
            </TimelineActionDate>
          ) : null}
          <TimelineActionIcon top={top}>
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
    </>
  )
}
