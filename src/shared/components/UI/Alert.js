import React from 'react';
import ReactDOM from 'react-dom'

const AlertContent = props => {
  const content = (
    <div className="bg-green-400 p-2 text-white font-semibold relative w-screen md:w-96">
      <div className="mr-12">{props.children}</div>
      <button onClick={props.close} className="absolute top-1 right-2">
        <i className="fas fa-times text-green-600"></i>
      </button>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('alert-hook'));
}

const Alert = props => {
  return (
    <React.Fragment>
      { props.show && <AlertContent {...props} /> }
    </React.Fragment>
  );
}

export default Alert;