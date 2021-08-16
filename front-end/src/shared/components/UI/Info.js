import React from 'react';

const Info = props => {
  let color;
  switch (props.color) {
    case 'green':
      color = 'bg-green-100 border-green-300 text-green-700';
      break;
    case 'red':
      color = 'bg-red-100 border-red-300 text-red-700';
      break;
    case 'yellow':
      color = 'bg-yellow-100 border-yellow-300 text-yellow-800';
      break;
    case 'blue':
      color = 'bg-blue-100 border-blue-300 text-blue-700'
      break;
  }

  return (
    <div className={`text-sm border p-2.5 ${props.className} ${color}`}>
      {props.children}
    </div>
  );
}

export default Info;