import React from 'react';
import './BeachInBar.css';
import {Rating} from "@mui/material";

const BeachInBar = ({beach, onClick, currentBeachId}) => {
    const { beachName, beachAverageScore, country, city } = beach;



    return (
        <div className={"beach-in-bar " + (currentBeachId === beach.id? "chosen":'')} onClick={onClick}>
            <h3 className="font-monospace">{beachName}</h3>
            <p className="font-monospace">{country}, {city}</p>
            <Rating value={beachAverageScore/2} precision={0.1} readOnly={true} size="small"/>
        </div>
    );
};

export default BeachInBar;