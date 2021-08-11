import React from 'react';

import Button from '../../shared/components/UI/Button';
import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';

const Step3 = props => {
  const cartItems = JSON.parse(localStorage.getItem('LOCAL_CART'));
  const address = props.address.current;

  return (
    <div className="">
      <div className="">
        <p>Payment method: <span className="uppercase">{props.paymentMethod}</span></p>
        <ul className="my-4">
          Your items:
          
          {cartItems.map(ci => (
            <li className="ml-2">
              <p>
                <span className="text-xs mr-2">{ci.qty} x</span>
                <span className="text-lg">{ci.name}</span>
              </p>
            </li>
          ))}
        </ul>
        <div className="">
          <div className="my-4">
            <p className="mb-2">Addressed to:</p>
            {Object.keys(address).map(a => (
              <p>{address[a]}</p>
            ))}
          </div>
          <div>
            <p>Total:</p>
            <p className="font-bold text-3xl">£{props.cartTotal.current.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Button danger onClick={() => props.setStep(2)}>Back</Button>
          {!props.isLoading && 
            <Button className="w-48" onClick={props.confirmOrder}>Confirm order</Button>
          }
          {props.isLoading && <div className="flex w-48 justify-center items-center"><LoadingSpinner /></div>}
        </div>
      </div>
    </div>
  );
}

export default Step3;