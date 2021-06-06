import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => { 
  const newClass = `
  ${props.danger ? 'bg-red-600 hover:bg-red-500 disabled:bg-red-500' : ''}
  ${props.secondary ? 'bg-yellow-600 hover:bg-yellow-500 disabled:bg-yellow-500' : ''}
  ${(!props.danger && !props.secondary) && 'bg-blue-600 hover:bg-blue-500 disabled:bg-blue-500'}
  text-white text-base text-center disabled:cursor-not-allowed disabled:opacity-50 ${props.className}`;

  if (props.to) {
    return (
      <Link to={props.to} 
            className={newClass}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={newClass}
            onClick={props.onClick}
            disabled={props.disabled}>        
      {props.children}
    </button>
  );
}

export default Button;