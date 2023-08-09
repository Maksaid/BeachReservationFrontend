import React from 'react';
import UmbrellaContainer from "./UmbrellaContainer";

const ReservationSection = ({beachDetails}) =>{
    const {beachColumnsCount, beachRowsCount, umbrellas} = beachDetails;
    console.log(beachDetails);
    return(
        <div className="section">
            <h2>columns: {beachColumnsCount},rows: {beachRowsCount},</h2>
            <UmbrellaContainer beachDetails={beachDetails}/>

        </div>
    );
}
export default ReservationSection;