import React from 'react'
import "./ReviewPage.css"
import { reviewData as reviews } from '../assets/data/Data';

const ReviewPage = () => {

    const renderStars = (rating) => {
        const filledStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        const stars = [];

        for (let i = 0; i < filledStars; i++) {
            stars.push(<i className="star fas fa-star" key={i}></i>);
        }

        if (hasHalfStar) {
            stars.push(<i className="star fas fa-star-half" key={filledStars}></i>);
        }

        return stars;
    };
    
    return (
        <div className='review-page'>
            <h2 className='review-header'>Customer Reviews</h2>
            {reviews.map((review) => (
                <div key={review.id} className='review-carousel'>
                    <h3 className='review-name'>{review.name}</h3>
                    <p className='review-comment'>{review.comment}</p>
                    <div className="review-rating">
                        {renderStars(review.rating)}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ReviewPage



