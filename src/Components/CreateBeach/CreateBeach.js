import "./CreateBeach.css"
import {useState} from "react";
import BeachConfiguration from "./BeachConfiguration/BeachConfiguration";

const CreateBeach = () =>{
    const [currRows, setCurrRows] = useState(2);
    const [currColumns, setCurrColumns] = useState(4);
    return(
        <div className="main">
            <h1 >Create your beach Here</h1>
            <label>Name:</label>
            <input/>
            <label>Description:</label>
            <input />
            <div id="cols and rows incrementors">
                <label>Columns: </label>
                <input onChange={ event => (setCurrColumns(event.target.value))} value={currColumns} step="1"/>
                <label>Rows: </label>
                <input onChange={ event => (setCurrRows(event.target.value))} value={currRows} step="1"/>
            </div>
            <BeachConfiguration currRows={currRows} currColumns={currColumns}/>
        </div>
    );
}
export default CreateBeach