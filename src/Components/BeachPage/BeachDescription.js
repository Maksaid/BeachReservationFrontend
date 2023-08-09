import React from 'react';

const BeachDescription = ({beachDetails}) =>{
    const {beachName, beachAverageScore, country, city, beachDescription} = beachDetails;
    console.log(beachDetails);

    return(
        <div>
            <h2>{beachName}</h2>
            <p>Rating: {beachAverageScore}</p>
            <p>{country}, {city}</p><br/><br/>
            <h1>About us</h1>
            <p>{beachDescription}</p>

        </div>
    );
}
export default BeachDescription;