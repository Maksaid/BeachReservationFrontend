import {useState} from "react";
import './ReservationSection.css'
import ReservationWindow from "./ReservationWindow/ReservationWindow";

const Umbr = ({umbrellaDetails, visible, style, id}) => {
    const [showWindow, setShowWindow] = useState(false);


    const handleClose = () =>{
        setShowWindow(false)
    }
    return (
        <div style={style} className="transparent">
            <div id={id} className={'umbrella ' + (!visible ? 'invisible' : '')}
                 onClick={event => {
                     setShowWindow(true);
                 }}>
            </div>
            {showWindow && (
                <ReservationWindow handleClose={handleClose} umbrellaInfo={umbrellaDetails[0]} />
            )}
        </div>

    );
}

export default Umbr;