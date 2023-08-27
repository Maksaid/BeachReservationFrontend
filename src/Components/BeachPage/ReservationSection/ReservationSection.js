import React, {useState} from 'react';
import Umbr from "./Umbr";
import './ReservationSection.css'

const ReservationSection = ({beachDetails}) => {
    const {beachColumnsCount, beachRowsCount, umbrellas} = beachDetails;
    const umbrellaIndexes = umbrellas.map(umbrella => umbrella.index);



    return (
        <div className="beach-background-res" >
            <div className="umbrella-container" style={{width:beachColumnsCount*40+"px",height:beachRowsCount*40+"px"}}>
                {Array.from({ length: beachRowsCount * beachColumnsCount }).map((_, index) => (
                    <Umbr key={index} id={index} umbrellaDetails={umbrellas.filter(x=>x.index === index)}
                          visible={umbrellaIndexes.includes(index)} style={{flexBasis: 100 / beachColumnsCount + "%"}} />
                ))}
            </div>
        </div>
)
    ;
}
export default ReservationSection;