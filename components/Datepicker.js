
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { VscCalendar} from 'react-icons/vsc';

export default function GfgDatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div >
      <br></br>
      <label className='title'> Due Date</label>
   
      <DatePicker className='name'  selected={startDate} onChange=
              {(date) => setStartDate(date)} />
              
    </div>
  );

      


 

   
               
  
   
  
}
