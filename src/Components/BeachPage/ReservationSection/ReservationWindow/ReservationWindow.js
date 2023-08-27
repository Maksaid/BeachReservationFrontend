import './ReservationWindow.css'
import DatePanel from "./DatePickerPanel/DatePanel";
import {useState} from "react";
const ReservationWindow = ({umbrellaInfo, handleClose}) =>{

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return(
        <div className="info-window">
            <label>CurrentReservations</label>
            <div>
                {umbrellaInfo.reservations !== undefined ? umbrellaInfo.reservations.map(reservation =>
                        <div style={{aspectRatio:1}}>
                            {reservation.dateFrom + "  " + reservation.dateTo}
                        </div>
                    ) : "all dates are available"}
            </div>
            <DatePanel startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}/>
            <button onClick={handleClose} className="close-button">
                X
            </button>
            <button>Create Reservation!</button>
        </div>
    );
}
export default ReservationWindow;