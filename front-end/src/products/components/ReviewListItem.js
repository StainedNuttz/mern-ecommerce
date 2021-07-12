import React from 'react';

const ReviewListItem = props => {
  return (
    <li className="border-t border-gray-200 pt-2">
      <div className="text-xs">
        <span className="text-yellow-500">{props.rating} / 5</span> - <span className="text-gray-600">{props.user}</span>
      </div>
      <h4 className="font-medium text-lg leading-6 my-2">{props.title}</h4>
      <p className="mt-1 font-normal">{props.text}</p>
    </li>
  );
}

export default ReviewListItem;