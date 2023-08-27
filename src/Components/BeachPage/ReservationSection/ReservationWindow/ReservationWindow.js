import './ReservationWindow.css'
import DatePanel from "./DatePickerPanel/DatePanel";
import {useState} from "react";
import axios from "axios";
const ReservationWindow = ({umbrellaInfo, handleClose}) =>{
    const [errorMessage, setErrorMessage] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const createReservation = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://localhost:7034/api/Reservation/create-reservation', {
                UmbrellaId: umbrellaInfo[0].id,
                DateFrom: startDate,
                DateTo: endDate,
                BeachId: umbrellaInfo[0].beachId
            }, {
                headers:
                    {
                        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
                    }
            });
            handleClose();
        } catch
            (error) {
            console.error(error);
            error.response.status === 401 ? setErrorMessage("Login please, your session is expired") : setErrorMessage("Something gone wrong");
        }
    }

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
            <button onClick={click => createReservation(click)}>Create Reservation!</button>
            <label style={{color:"red"}}>{errorMessage}</label>
        </div>
    );
}
export default ReservationWindow;