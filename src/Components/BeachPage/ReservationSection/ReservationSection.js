import React, {useState} from 'react';
import UmbrellaContainer from "./UmbrellaContainer/UmbrellaContainer";
import DatePanel from "./DatePickerPanel/DatePanel";
import './ReservationSection.css'

const ReservationSection = ({beachDetails}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    return (
        <div className="section">
            <div className="beach-colors umbrella-section">
                <UmbrellaContainer beachDetails={beachDetails} startDate={startDate} endDate={endDate}/>
            </div>
        <DatePanel  setStartDate={setStartDate} setEndDate={setEndDate} endDate={endDate} startDate={startDate }/>
</div>
)
    ;
}
export default ReservationSection;