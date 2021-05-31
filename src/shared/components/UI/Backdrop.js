import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props => {
  const body = document.body.className;
  useEffect(() => {
    document.body.className = body + ' overflow-hidden w-full fixed';
    return () => { document.body.className = body }
  });

  return (
    ReactDOM.createPortal(
      <div onClick={props.onClick} className="h-screen w-full bg-black bg-opacity-50 fixed top-0 left-0 z-20"></div>,
      document.getElementById('backdrop-hook')
    )
  );
}

export default Backdrop;