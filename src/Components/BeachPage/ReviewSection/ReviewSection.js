import {useEffect, useState} from "react";
import axios from "axios";
import './ReviewSection.css'
import Review from "./Review/Review";

const ReviewSection = ({beachId}) => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        // Fetch beach details by id when beachId changes
        if (beachId !== undefined) {
            console.log('REVIEW BEACH ID: ' + beachId)
            axios.get(`https://localhost:7034/api/Review/get-beach-reviews`, {
                params: {
                    beachId: beachId
                }
            })
                .then(response => {
                    setReviews(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);

                });
        } else {
            setReviews(null);

        }
    }, [beachId]);

    return (
        <div className="section">
            <div className="container">
                {reviews !== null && (
                    reviews.map((review) =>
                        <Review
                            key={review.reviewId}
                            reviewDetails={review}
                        />
                    ))
                }
            </div>
        </div>
    );
}
export default ReviewSection;