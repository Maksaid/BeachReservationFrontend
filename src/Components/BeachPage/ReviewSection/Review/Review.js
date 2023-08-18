import './Review.css'

const Review = ({reviewDetails}) => {
    return (
        <div className="review">
            <div className="author">
                {reviewDetails.authorName}
                <br/>
                {reviewDetails.reviewScore}/10
            </div>
            <div className="text">
                {reviewDetails.text}
            </div>
        </div>
    );
}
export default Review;