import React from 'react';
import './BeachDescription.css'

const BeachDescription = ({beachDetails}) =>{
    const {beachName, beachAverageScore, country, city, beachDescription} = beachDetails;
   // console.log(beachDetails);

    return(
        <div className="beach-description-main">
            <h2 className="p">{beachName}</h2>
            <div>
                <div className="p">Rating: {beachAverageScore}    {country}, {city}</div>
            </div>

            <div className="p">
                <h1 >About us</h1>
                <p >{beachDescription}</p>
            </div>


        </div>
    );
}
export default BeachDescription;