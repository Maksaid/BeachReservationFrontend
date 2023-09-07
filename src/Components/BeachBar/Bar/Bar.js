import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeachInBar from "./BeachInBar/BeacInBar";
import './Bar.css';


const Bar = (props) => {
    const [beaches, setBeaches] = useState([]);

    useEffect(() => {
        // Fetch beaches data from the API
        axios.get('https://localhost:7034/api/Beach/get-all-beaches')
            .then(response => {
                setBeaches(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching beaches:', error);
            });
    }, []);

    return (
        <div className={"bar-container " + props.visible} style={{paddingTop:"10.5vh"}}>
            {beaches.map(beach => (
                <BeachInBar
                    currentBeachId={props.currentBeach}
                    key={beach.id}
                    beach={beach}
                    onClick={() => props.handleBeachClick(beach.id)}
                />
            ))}
        </div>
    );
};

export default Bar;