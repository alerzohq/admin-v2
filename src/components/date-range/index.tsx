import { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'
import OutsideClickHandler from 'react-outside-click-handler'
import { CalenderIcon } from '../../assets/icons'
import { formatDate } from '../../utils/formatValue'
import {
  isSameDay,
  endOfDay,
} from 'date-fns';
import {
  DateRangeContainer,
  DateRangeWrapper,
} from './styles/date-range.styles'

const DateRange = ({ filterDate, isTop, right }: any) => {
  const [dateValue, setDateValue] = useState('')
  const [show, setShow] = useState(false)
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })
  const handleSelect = ({ selection }: any) => {
    const endDateVal = isSameDay(selection?.startDate, selection?.endDate) ?  endOfDay(selection?.endDate) : selection?.endDate;
    setSelectionRange({
      ...selectionRange,
      startDate: selection?.startDate,
      endDate: endDateVal,
    })
    let start_date = formatDate(selection?.startDate, 'l')
    let end_date = formatDate(endDateVal, 'l')
    setDateValue(`${start_date} - ${end_date}`)

    let startD = formatDate(selection?.startDate)
    let endD = formatDate(endDateVal)

    filterDate((prev: any) => ({ ...prev, from: startD, to: endD }))
  }

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setShow(false)
      }}
    >
      <DateRangeWrapper>
        <button className={'btn'} onClick={() => setShow(!show)}>
          {dateValue ? dateValue : 'Select Date '}
          <CalenderIcon />
        </button>
        {show && (
          <DateRangeContainer isTop={isTop} right={right}>
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
            />
          </DateRangeContainer>
        )}
      </DateRangeWrapper>
    </OutsideClickHandler>
  )
}

export default DateRange
