import React from 'react';

const ReservationSection = ({beachDetails}) =>{
    const {beachColumnsCount, beachRowsCount, umbrellas} = beachDetails;
    console.log(beachDetails);
    return(
        <div className="section">
            <h2>{beachColumnsCount}, {beachRowsCount},</h2>


        </div>
    );
}
export default ReservationSection;