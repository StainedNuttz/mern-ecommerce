import React from 'react';

const Button = props => {
  return (
    <button className="bg-blue-600 hover:bg-blue-500 text-white p-3 mt-2 font-semibold">{props.text}</button>
  );
}

export default Button;