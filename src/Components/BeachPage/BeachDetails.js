// BeachDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeachDescription from "./DescriptionSection/BeachDescription";
import ReservationSection from "./ReservationSection/ReservationSection";
import './BeachDetails.css'
import ReviewSection from "./ReviewSection/ReviewSection";
import StartPage from "./StartPage/StartPage";
import defaultImage from '../../Images/beach.png';


const BeachDetails = (props) => {
    const [beachDetails, setBeachDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [dataUrl, setDataUrl] = useState(defaultImage)


    useEffect(() => {
        // Fetch beach details by id when beachId changes
        console.log('first beachID: ' + props.beachId)
        if (props.beachId !== null) {
            axios.get(`https://localhost:7034/api/Beach/get-beach`,{
                params: {
                    beachId: props.beachId
                }
            })
                .then(response => {
                    setBeachDetails(response.data);
                    setLoading(false); // Set loading to false once the data is fetched
                    if (response.data.images.length > 0){
                        const base64String = response.data.images[0].data;
                        setDataUrl(`data:image/jpeg;base64,${base64String}`)
                    }
                    else
                        setDataUrl(defaultImage)
                    console.log(response);
                })
                .catch(error => {
                    console.error('Error fetching beach details:', error);
                    setLoading(false); // Set loading to false once the data is fetched

                });
        } else {
            setBeachDetails(null);
            setLoading(false); // Set loading to false once the data is fetched

        }
    }, [props.beachId]);


    if (!beachDetails) {
        return <StartPage />;
    }
    if (loading) {
        return <div>Loading...</div>; // Display a loading indicator while fetching data
    }

    return (
        <div className="beach-details" style={{backgroundImage:`url(${dataUrl})`, backgroundSize:'cover'}}>
                <BeachDescription  beachDetails={beachDetails}/>
                <ReservationSection  beachDetails={beachDetails}/>
                <ReviewSection beachId={beachDetails.id} isLoggedIn={props.isLoggedIn}/>
        </div>
    );
};

export default BeachDetails;