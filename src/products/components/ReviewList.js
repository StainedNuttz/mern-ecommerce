import React from 'react';

import ReviewListItem from './ReviewListItem';

const ReviewList = props => {
  if (props.reviews.length === 0) {
    return <div>No reviews</div>
  } else {
    return (
      <ul className="flex flex-col text-sm space-y-4">
        { props.reviews.map(r => (<ReviewListItem 
          rating={r.rating}
          author={r.author}
          title={r.title}
          text={r.text}
        />)) }
      </ul>
    );
  }
}

export default ReviewList;