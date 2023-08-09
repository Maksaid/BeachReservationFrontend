import React from 'react'
import './Umbrella.css'


const UmbrellaContainer = ({beachDetails}) =>{
    const {beachColumnsCount, beachRowsCount, umbrellas} = beachDetails;

    //console.log(Array.from({length: rows*columns}, (x, i) => i))
    return(
        <div className="umbrella-container">
            {Array.from({ length: beachRowsCount*beachColumnsCount }).map((_, rowIndex) => (
                <div className="square" />
            ))}
        </div>
    );
}

export default UmbrellaContainer;