import {useState} from "react";
import './BeachConfiguration.css'
const Umbrella = ({id, currColumns, deleteIndex}) => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div id={id} className={'umbr ' + (isClicked ? 'not-selected' : '')} style={{flexBasis: 100 / currColumns + "%"}}
             onClick={event => {
                 deleteIndex(id);
                 setIsClicked(!isClicked);
             }}>
                 </div>
                 );
             }
             export default Umbrella;