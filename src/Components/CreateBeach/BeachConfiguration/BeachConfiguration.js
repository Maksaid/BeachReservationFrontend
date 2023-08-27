import {useEffect, useState} from "react";
import "./BeachConfiguration.css"
import Umbrella from "./Umbrella";


const BeachConfiguration = ({currRows, currColumns, currIndexes}) => {
    const [indexes, setIndexes] = useState(Array.from({length: currRows * currColumns}, (_, i) => i));

    useEffect(() => {
        setIndexes(Array.from({length: currRows * currColumns}, (_, i) => i))
        currIndexes.current = Array.from({length: currRows * currColumns}, (_, i) => i);
    }, [currColumns, currRows]);

    function deleteIndex (index) {
        if (currIndexes.current.includes(index))
            currIndexes.current = currIndexes.current.filter(el => el !== index);
        else
            currIndexes.current.push(index);

    }

    return (
        <div className="beach-background" style={{width:currColumns*30+"px",height:currRows*30+"px"}}>
            <div className="umbr-container">
                {indexes.map((umbrella, i) => (
                    <Umbrella key={i} id={i}  deleteIndex={deleteIndex} currColumns={currColumns} />
                ))}
            </div>
        </div>
    );
}
export default BeachConfiguration;