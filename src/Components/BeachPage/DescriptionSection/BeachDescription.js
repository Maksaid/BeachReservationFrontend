import React from 'react';
import './BeachDescription.css'
import {Rating} from "@mui/material";

const BeachDescription = ({beachDetails}) =>{
    const {beachName, beachAverageScore, country, city, beachDescription} = beachDetails;

    return(
        <div className="beach-description-main">
            <h2 className="header font-monospace">{beachName}</h2>
            <div>
                <div className="p font-monospace">
                    Rating:
                    <Rating name="size-large" value={beachAverageScore/2} precision={0.1} readOnly={true} size="large"/>
                    {country}, {city}
                </div>
            </div>

            <div className="p font-monospace">
                <h1 >About us</h1>
                <p >{beachDescription}</p>
            </div>


        </div>
    );
}
export default BeachDescription;