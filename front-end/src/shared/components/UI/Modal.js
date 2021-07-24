import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import Backdrop from './Backdrop';

const Modal = props => {
  return ReactDOM.createPortal(
    <Backdrop>
      <div className="bg-white p-4 rounded-md">
        {props.children}
        <div className="flex justify-center space-x-2 mt-3">
          <Button className="p-1 px-5" onClick={props.yes}>Yes</Button>
          <Button danger className="p-1 px-5" onClick={props.no}>No</Button>
        </div>
      </div>
    </Backdrop>
  , document.getElementById('modal-hook'));
}

export default Modal;