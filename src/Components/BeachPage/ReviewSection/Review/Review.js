import './Review.css'
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const Review = ({reviewDetails, isLoggedIn, onDetailsChanged}) => {
    const [currentRate, setCurrentRate] = useState(reviewDetails.reviewScore);
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
                await axios.post('https://localhost:7034/api/Review/update-review', {
                    ReviewId: reviewDetails.reviewId,
                    NewReviewScore: parseInt(currentRate),
                    NewText: editedText
                }, {
                    headers:
                        {
                            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
                        }
                });
                toast.success('Review updated!', {
                    position: "top-right",
                    autoClose: 3001,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                reviewDetails.text = editedText;
                onDetailsChanged();
            } catch
                (error) {
                console.error(error);
            }
            setIsEditing(false);
        };
    const handleDeleteClick = async (e) => {
        e.preventDefault();
        try {
            await axios.delete('https://localhost:7034/api/Review/delete-review', {
                headers:
                    {
                        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
                    },
                params: {
                    reviewId: reviewDetails.reviewId,
                }
            });
            reviewDetails = null;
            toast.success('Review deleted!', {
                position: "top-right",
                autoClose: 3001,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
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
                {isEditing ? (
                        <input className="input" pattern="\d" type="number" max="10" min="1" step="1" value={currentRate}
                               onChange={(e) => setCurrentRate(e.target.value)}/>)
                    : (
                        reviewDetails.reviewScore + '/10'
                    )}

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
                    <div className="flex">
                        <div className="comment">{reviewDetails.text}</div>
                        <div
                            className="date">{reviewDetails.reviewDate.substring(0, 10)} {reviewDetails.reviewDate.substring(11, 16)}</div>
                    </div>

                )}
            </div>
        </div>
    )
        ;
}
export default Review;