import React from 'react';
import ReactDOM from 'react-dom'

const AlertContent = props => {
  const content = (
    <div id={props.id} className="border border-blue-300 bg-blue-100 text-blue-700 rounded-md p-3 font-normal relative w-screen md:w-96">
      <div className="mr-12">{props.children}</div>
      <button onClick={props.close} className="absolute top-1 right-2">
        <i className="fas fa-times text-blue-600" />
      </button>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('alert-hook'));
}

const Alert = props => {  
  return (
    <>
      {props.show && !document.getElementById(props.id) && <AlertContent {...props} />}
    </>
  );
}

export default Alert;