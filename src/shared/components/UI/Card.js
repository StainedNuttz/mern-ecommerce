import React from 'react';

const Card = props => {
  return (
    <div className={`${props.className} rounded-lg shadow-lg bg-white`}>
      {props.children}
    </div>
  );
}

export default Card;