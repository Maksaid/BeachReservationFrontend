// BeachDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BeachDetails = (props) => {
    const [beachDetails, setBeachDetails] = useState({});
    const [loading, setLoading] = useState(true);


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
        return <div>No beach selected</div>;
    }
    if (loading) {
        return <div>Loading...</div>; // Display a loading indicator while fetching data
    }

    return (
        <div className="beach-details">
            <h2>Beach Details</h2>
            <p>Name: {beachDetails.beachName}</p>
            <p>Score: {beachDetails.beachAverageScore}</p>
            <p>Description: {beachDetails.beachDescription}</p>
            <p>Country: {beachDetails.country}</p>
            <p>City: {beachDetails.city}</p>
            {/* Add other beach details here */}
        </div>
    );
};

export default BeachDetails;