import React from 'react'
import './Umbrella.css'


const UmbrellaContainer = ({beachDetails}) =>{
    const {beachColumnsCount, beachRowsCount, umbrellas} = beachDetails;
        const umbrellaIndexes = umbrellas.map(umbrella => umbrella.index);
        const containerWidth = beachColumnsCount * 40;
    return(
        <div style={{width: containerWidth}} className="umbrella-container">
            {Array.from({ length: beachRowsCount * beachColumnsCount }).map((_, index) => (
                <div className={"square " + (!umbrellaIndexes.includes(index) ? 'invisible' : '')} />
            ))}
        </div>
    );
}

export default UmbrellaContainer;