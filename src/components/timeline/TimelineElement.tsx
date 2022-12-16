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
}: {
  actions: { date?: string; action: string; icon?: ReactNode }[]
}): JSX.Element => {
  return (
    <>
      {actions?.map((action: any, i) => (
        <TimelineAction key={i} actionsNum={actions.length}>
          {action?.date ? (
            <TimelineActionDate>
              {formatDate(Number(action.date), 'YYYY-MM-DD HH:mm:ss')}
            </TimelineActionDate>
          ) : (
            ''
          )}
          <TimelineActionIcon>
            {action.icon ?? <TimelineIcon />}
          </TimelineActionIcon>
          <TimelineActionData>
            {action?.action.split(',').join(', ')}
          </TimelineActionData>
        </TimelineAction>
      ))}
    </>
  )
}
