import React from 'react';
import './BeachInBar.css';

const BeachInBar = ({beach, onClick}) => {
    const { beachName, beachAverageScore, country, city } = beach;



    return (
        <div className="beach-in-bar" onClick={onClick}>
            <h3>{beachName}</h3>
            <p>{country}, {city}</p>
            <p>{beachAverageScore}/10</p>
        </div>
    );
};

export default BeachInBar;