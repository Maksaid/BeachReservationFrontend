import {Card, Container} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {DotWave, RaceBy} from '@uiball/loaders'
import {Rating} from "@mui/material";



const Profile = () =>{
    const [userDetails, setUserDetails] = useState(null);
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7034/api/User/get-user-details', {
                    params: {
                        Id: localStorage.getItem('userId')
                    }
                });
                setUserDetails(response.data.userDto);
                console.log(response.data.userDto)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching beach details:', error);
                setLoading(false);
            }
        };

        fetchData(); // Call the async function to initiate the API request
    }, []);

    if (userDetails === null)
        return  <RaceBy size={100} color="#231F20"/>


    return(
        <Container className="mt-5 pt-5 overflow-y-scroll" fluid={true}>
            <h1>{localStorage.getItem('userName')}</h1>
            { isLoading &&
                <Container className="flex justify-content-center" fluid="sm">
                    <RaceBy size={100} color="#231F20"/>
                </Container>
            }
            <label>Your data:</label>
            <Container fluid={"md"}>
                <label>Phone number: {userDetails.user.phone}</label><br/>
                <label>Email: {userDetails.user.email}</label><br/>
                <label>login: {userDetails.user.login}</label>
            </Container>
            <label>Beaches: </label>
            <Container fluid={true}>
            {
                userDetails.beaches.map((beach, index) =>
                    <Card >
                        <Card.Body className={"ps-2 pt-1 pb-1"}>
                            <Card.Title className="font-monospace">{beach.beachName}</Card.Title>
                            <Card.Text className="font-monospace">{beach.country}, {beach.city}</Card.Text>
                            <Rating value={beach.beachAverageScore / 2} precision={0.1} readOnly={true} size="small"/>
                        </Card.Body>
                    </Card>)
            }
            </Container>
            <label>Reviews</label>
            {
                userDetails.reviews.map((review, index) =>
                    <Card >
                        <Card.Body className={"ps-2 pt-1 pb-1"}>
                            <Card.Title className="font-monospace">{review.reviewDate}</Card.Title>
                            <Rating value={review.reviewScore / 2} precision={0.1} readOnly={true} size="small"/>
                        </Card.Body>
                    </Card>)
            }

            <label>Reservations</label>
            {
                userDetails.reservations.map((reservation, index) =>
                    <Card >
                        <Card.Body className={"ps-2 pt-1 pb-1"}>
                            <Card.Title className="font-monospace">{reservation.dateFrom + " - " + reservation.dateTo}</Card.Title>
                            <Card.Text className="font-monospace">{reservation.reservationDate}, {reservation.reservationId}</Card.Text>
                        </Card.Body>
                    </Card>)
            }
        </Container>
    );
}

export default Profile;