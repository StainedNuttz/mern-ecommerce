import React from 'react';

const Hamburger = props => {
  return (
    <div onClick={props.onClick} className="">
      <button className="flex flex-col space-y-2">
        <div className="border-b-2 border-white w-8"></div>
        <div className="border-b-2 border-white w-8"></div>
        <div className="border-b-2 border-white w-8"></div>
      </button>
    </div>
  );
}

export default Hamburger;