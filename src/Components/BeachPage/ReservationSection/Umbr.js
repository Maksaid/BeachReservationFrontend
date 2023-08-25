import {useState} from "react";
import './ReservationSection.css'

const Umbr = ({umbrellaDetails, visible, style, id}) => {
    const [isClicked, setIsClicked] = useState(false);


    const handleUmbrClick = () =>{
    }
    return (
        <div style={style} className="transparent">
            <div id={id} className={'umbrella ' + (!visible ? 'invisible' : '')}
                 onClick={event => {
                     handleUmbrClick();
                     setIsClicked(!isClicked);
                 }}>
            </div>
        </div>

    );
}

export default Umbr;