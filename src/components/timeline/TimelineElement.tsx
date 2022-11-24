import React from 'react'
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
  actions: { date: string; action: string }[]
}): JSX.Element => {
  return (
    <>
      {actions?.map((action: any, i) => (
        <TimelineAction key={i}>
          <TimelineActionDate>
            {action?.date
              ? formatDate(Number(action.date), 'YYYY-MM-DD HH:mm:ss')
              : ''}
          </TimelineActionDate>
          <TimelineActionIcon>
            <TimelineIcon />
          </TimelineActionIcon>
          <TimelineActionData>{action?.action}</TimelineActionData>
        </TimelineAction>
      ))}
    </>
  )
}
