import React from 'react';

const Card = props => {
  return (
    <div className={`rounded-sm shadow bg-white ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Card;