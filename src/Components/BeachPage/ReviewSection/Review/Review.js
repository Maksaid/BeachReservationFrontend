import './Review.css'
import {useState} from "react";
import axios from "axios";

const Review = ({reviewDetails, isLoggedIn, onDetailsChanged}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(reviewDetails.text);

    const handleEditClick = () => {
        setIsEditing(true);
        console.log(reviewDetails.reviewId)
        console.log(localStorage.getItem('jwtToken'))
    };

    const handleSaveClick = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('https://localhost:7034/api/Review/update-review', {
                    ReviewId: reviewDetails.reviewId,
                    NewReviewScore: parseInt(reviewDetails.reviewScore),
                    NewText: editedText
                }, {
                    headers:
                        {
                            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
                        }
                });
                reviewDetails.text = editedText;
            } catch
                (error) {
                console.error(error);
            }
            setIsEditing(false);
        }
    ;
    const handleDeleteClick = async (e) => {
        e.preventDefault();
        try {
            await axios.delete('https://localhost:7034/api/Review/delete-review',  {
                headers:
                    {
                        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
                    },
                params: {
                    reviewId: reviewDetails.reviewId,
                }});
            reviewDetails=null;
            onDetailsChanged();
        } catch
            (error) {
            console.error(error);
        }
    }

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditedText(reviewDetails.text);
    };
    return (
        <div className="review">
            {((reviewDetails.authorId === localStorage.getItem('userId')) && !isEditing && isLoggedIn) && ( // Show edit button only if user is authenticated
                <div className="edit-button" onClick={handleEditClick}>
                    ✎ {/* Pen symbol */}
                </div>
            )}
            {((reviewDetails.authorId === localStorage.getItem('userId')) && !isEditing && isLoggedIn) && ( // Show edit button only if user is authenticated
                <div className="delete-button" onClick={handleDeleteClick}>
                    ✖ {/* cross symbol */}
                </div>
            )}

            <div className="author">
                {reviewDetails.authorName}
                <br/>
                {reviewDetails.reviewScore}/10
            </div>
            <div className="text">
                {isEditing ? (
                    <div>
                        <textarea
                            className="textarea"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                        />
                        <button onClick={handleSaveClick}>Save</button>
                        <button onClick={handleCancelClick}>Cancel</button>
                    </div>
                ) : (
                    reviewDetails.text
                )}
            </div>
        </div>
    )
        ;
}
export default Review;