import React from 'react'
import './Umbrella.css'


const UmbrellaContainer = ({beachDetails}) =>{
    const {beachColumnsCount, beachRowsCount, umbrellas} = beachDetails;

        const containerWidth = beachColumnsCount * 40;
    return(
        <div style={{width: containerWidth}}className="umbrella-container">
            {Array.from({ length: beachRowsCount * beachColumnsCount }).map((_, rowIndex) => (
                <div className="square" />
            ))}
        </div>
    );
}

export default UmbrellaContainer;