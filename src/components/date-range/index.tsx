import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import OutsideClickHandler from 'react-outside-click-handler';
import { CalenderIcon } from '../../assets/icons';
import { formatDate } from '../../utils/formatValue';
import { DateRangeContainer, DateRangeWrapper } from './styles/date-range.styles';



const DateRange = ({filterDate}:any) => {

    const [dateValue,setDateValue]= useState('')
    const [show,setShow]= useState(false)
    const [selectionRange, setSelectionRange] =useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
 
const handleSelect = ({selection}: any)=>{
        setSelectionRange({...selectionRange,startDate:selection?.startDate,
        endDate:selection?.endDate
    })
    let start_date=formatDate(selection?.startDate,'l')
    let end_date=formatDate(selection?.endDate,'l')
    setDateValue(`${start_date} - ${end_date}`);

    let startD=formatDate(selection?.startDate,'YYYY-MM-DD, h:mm:ss a')
    let endD=formatDate(selection?.endDate,'YYYY-MM-DD,h:mm:ss a')


    filterDate((prev:any)=>({...prev, from:startD,to:endD}))
};

  return (
    <OutsideClickHandler  onOutsideClick={() => {setShow(false)}}>
    <DateRangeWrapper>

        <button className={'btn'} onClick={()=>setShow(!show)}>
         {dateValue? dateValue :'Select Date '}
         <CalenderIcon />
        </button>
        {show && (
          <DateRangeContainer>
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