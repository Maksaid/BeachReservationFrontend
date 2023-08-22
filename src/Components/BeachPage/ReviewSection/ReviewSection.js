import {useEffect, useState} from "react";
import axios from "axios";
import './ReviewSection.css'
import Review from "./Review/Review";
import CreateReviewInput from "./CreateReview/CreateReviewInput";

const ReviewSection = ({beachId, isLoggedIn}) => {
    const [rerender, setRerender] = useState(0);
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
    }, [beachId, rerender]);

    const onDetailsChanged = () =>{
        setRerender(rerender + 1);
    }

    return (
        <div className="review-section">
            <div className="container">
                <p>Review Section</p>
                <CreateReviewInput beachId={beachId} isLoggedIn={isLoggedIn} onDetailsChanged={onDetailsChanged}/>
                {reviews !== null && (
                    reviews.slice().reverse().map((review) =>
                        <Review
                            key={review.reviewId}
                            reviewDetails={review}
                            isLoggedIn={isLoggedIn}
                            onDetailsChanged={onDetailsChanged}
                        />
                    ))
                }
            </div>
        </div>
    );
}
export default ReviewSection;