import {useEffect, useRef, useState} from "react";
import "./BeachConfiguration.css"
import Umbrella from "./Umbrella";


const BeachConfiguration = ({currRows, currColumns}) => {
    const [indexes, setIndexes] = useState(Array.from({length: currRows * currColumns}, (_, i) => i));
    const currIndexes = useRef(Array.from({length: currRows * currColumns}, (_, i) => i));

    useEffect(() => {
        setIndexes(Array.from({length: currRows * currColumns}, (_, i) => i))
        currIndexes.current = Array.from({length: currRows * currColumns}, (_, i) => i);
    }, [currColumns, currRows]);

    function deleteIndex (index) {
        if (currIndexes.current.includes(index))
            currIndexes.current = currIndexes.current.filter(el => el !== index);
        else
            currIndexes.current.push(index);
        console.log(currIndexes.current);
        console.log(index)
    }

    return (
        <div className="beach-background">
            <div className="umbr-container">
                {indexes.map((umbrella, i) => (
                    <Umbrella key={i} id={i}  style={{flexBasis: 100 / currColumns + "%"}} deleteIndex={deleteIndex} currColumns={currColumns} />

                ))}
            </div>
        </div>
    );
}
export default BeachConfiguration;