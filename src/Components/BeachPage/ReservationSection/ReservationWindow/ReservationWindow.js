import './ReservationWindow.css'
import DatePanel from "./DatePickerPanel/DatePanel";
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Alert, CloseButton} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ReservationWindow = ({umbrellaInfo, handleClose}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const parseDate = (dateString) => {
        let [year, month, day] = dateString.split("T")[0].split("-").map(Number);
        const date = new Date(year, month - 1, day);
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const formattedDate = date.toLocaleDateString("en-US", options);

        // Convert the month to title case
        [month, day, year] = formattedDate.split(' ');
        const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);

        // Add 'th', 'st', or 'nd' to the day
        let formattedDay = day.slice(0, -1);
        if (day === '1' || day === '21' || day === '31') {
            formattedDay += 'st';
        } else if (day === '2' || day === '22') {
            formattedDay += 'nd';
        } else if (day === '3' || day === '23') {
            formattedDay += 'rd';
        } else {
            formattedDay += 'th';
        }

        return `${formattedDay} ${formattedMonth} ${year}`;
    }
    const setErrorMessage = (errorMessage) => {
        toast.error(errorMessage, {
            position: "top-right",
            autoClose: 3001,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    const createReservation = async (e) => {
        e.preventDefault();
        try {
            var response = await axios.post('https://localhost:7034/api/Reservation/create-reservation', {
                UmbrellaId: umbrellaInfo.id,
                DateFrom: startDate,
                DateTo: endDate,
                BeachId: umbrellaInfo.beachId
            }, {
                headers:
                    {
                        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
                    }
            });
            handleClose();
            toast.success('Reservation created!', {
                position: "top-right",
                autoClose: 3001,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } catch
            (error) {
            console.error(error);
            error.response.status === 401 ? setErrorMessage("Login please, your session is expired") : setErrorMessage("Something gone wrong");
        }
    }

    return (
        <div className="info-window">
            <label>CurrentReservations</label>
            <div>
                {umbrellaInfo.reservations !== undefined ? umbrellaInfo.reservations.map(reservation =>
                    <Alert variant="danger" className="font-monospace">
                        {parseDate(reservation.dateFrom) + " - " + parseDate(reservation.dateTo)}
                    </Alert>
                ):""}
            </div>
            <div>
                {umbrellaInfo.reservations === undefined || umbrellaInfo.reservations.length === 0 ?
                    <Alert variant="success" className="font-monospace">All dates are free</Alert> : ""}
            </div>
            <DatePanel startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}/>
            <CloseButton onClick={handleClose} className="close-button">
            </CloseButton>
            <Button variant="success" onClick={click => createReservation(click)}>Create Reservation!</Button>
        </div>
    );
}
export default ReservationWindow;