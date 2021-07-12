import React from 'react';

import ReviewListItem from './ReviewListItem';

const ReviewList = props => {
  console.log(props.reviews)
  if (props.reviews.length === 0) {
    return <div>No reviews</div>
  } else {
    return (
      <ul className="flex flex-col text-sm space-y-4">
        {
          props.reviews.map(r => {
            let user;
            if (r.user === null) { user = 'Unknown user' } else { user = r.user.username }
            return (<ReviewListItem
              key={Math.random()}
              title={r.title}
              text={r.text}
              rating={r.rating}
              user={user}
              date={r.date}
            />);
          })
        }
      </ul>
    );
  }
}

export default ReviewList;