import React from 'react';
import './BeachInBar.css';

const BeachInBar = ({beach, onClick, currentBeachId}) => {
    const { beachName, beachAverageScore, country, city } = beach;



    return (
        <div className={"beach-in-bar " + (currentBeachId === beach.id? "chosen":'')} onClick={onClick}>
            <h3 className="font-monospace">{beachName}</h3>
            <p className="font-monospace">{country}, {city}</p>
            <p>{beachAverageScore}/10</p>
        </div>
    );
};

export default BeachInBar;