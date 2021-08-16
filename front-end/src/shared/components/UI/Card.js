import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const CardComponent = (props, ref) => {
  if (props.link) {
    return (
      <Link 
        id={props.id}
        className={`${props.className} ${props.growStyle} rounded-lg shadow-lg bg-white text-left block`}
        to={props.link}
      >
        {props.children}
      </Link>
    )
  } else if (props.onClick) {
    return (
      <button
        id={props.id}
        className={`${props.className} ${props.growStyle} rounded-lg shadow-lg bg-white text-left block`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  } else {
    return (
      <div ref={ref} id={props.id} className={`${props.className} rounded-lg shadow-lg bg-white`}>
        {props.children}
      </div>
    )
  }
}

const Card = forwardRef(CardComponent);

export default Card;