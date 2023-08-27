import React, {useState} from "react";
import DatePicker from "react-datepicker";
import './DatePanel.css'
import "react-datepicker/dist/react-datepicker.css";

const DatePanel = (props) => {
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <div className="date-panel">
            <label>from: </label>
            <DatePicker id="from" selected={props.startDate} onChange={
                (date) => {
                    if (date < props.endDate){
                        props.setStartDate(date)
                        setErrorMessage("");
                    }
                    else
                        setErrorMessage("end date must be greater then start date")
                }
            }/>
            <label>to: </label>
            <DatePicker id="to" selected={props.endDate} onChange={
                (date) => {
                    if (date > props.startDate){
                        props.setEndDate(date)
                        setErrorMessage("");
                    }
                    else
                        setErrorMessage("end date must be greater then start date")
                }
            }/>
            <div style={{color:"red"}}>{errorMessage}</div>
        </div>
    );
}

export default DatePanel;