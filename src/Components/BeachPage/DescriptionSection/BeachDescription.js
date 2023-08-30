import React, {useEffect} from 'react';
import './BeachDescription.css'
import {Rating} from "@mui/material";
import {Carousel} from "react-bootstrap";

const BeachDescription = ({beachDetails}) =>{
    const {beachName, beachAverageScore, country, city, beachDescription} = beachDetails;

    useEffect(event => {
        console.log(beachDetails)
    }, [beachDetails])

    return(
        <div className="beach-description-main">
            <h2 className="header font-monospace">{beachName}</h2>
            <div>
                <div className="header font-monospace">
                    Rating:
                    <Rating name="size-large" value={beachAverageScore/2} precision={0.1} readOnly={true} size="large"/>
                    {country}, {city}
                </div>
            </div>

            <div className="p font-monospace">
                <h1 >About us</h1>
                <p >{beachDescription}</p>
            </div>
            <Carousel className="carousel-size" fade>
                {beachDetails.images !== undefined && beachDetails.images.length > 0 && beachDetails.images.map(image =>
                <Carousel.Item>
                    <img className="carousel-image" src={`data:image/jpeg;base64,${image.data}`}/>
                </Carousel.Item>
                )}
            </Carousel>


        </div>
    );
}
export default BeachDescription;