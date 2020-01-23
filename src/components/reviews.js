import React from 'react'
import Review from './review'

function Reviews(props) {
  return (
    <div>
      {props.restaurant.reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  )
}

export default Reviews