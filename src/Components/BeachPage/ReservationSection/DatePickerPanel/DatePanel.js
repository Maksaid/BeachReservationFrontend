import React from "react";
import DatePicker from "react-datepicker";
import './DatePanel.css'
import "react-datepicker/dist/react-datepicker.css";

const DatePanel = (props) =>{

    return(
        <div className="date-panel">
            <DatePicker id="from" selected={props.startDate} onChange={(date) => props.setStartDate(date)}/>
            <DatePicker id="to" selected={props.endDate} onChange={(date) => props.setEndDate(date)}/>
        </div>
    );
}

export default DatePanel;