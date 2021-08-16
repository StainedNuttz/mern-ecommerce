import React from 'react';

import Button from '../../shared/components/UI/Button';
import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';

const Step3 = props => {
  const cartItems = JSON.parse(localStorage.getItem('LOCAL_CART'));
  const address = props.address.current;

  return (
    <div className="">
      <div className="">
        <p className="font-bold">Payment method:</p>
        <p className="uppercase ml-2">{props.paymentMethod}</p>

        <ul className="my-4">
          <p className="font-bold">Your items:</p>
          {cartItems.map(ci => (
            <li key={ci.id} className="ml-2">
              <p>
                <span className="text-xs mr-2">{ci.qty} x</span>
                <span className="text-lg">{ci.name}</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="">
          <div className="my-4">
            <p className="mb-2 font-bold">Addressed to:</p>
            <ul>
              {Object.keys(address).map(a => (
                <li className="ml-2" key={a}>{address[a]}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Total:</p>
            <p className="font-bold text-3xl">£{props.cartTotal.current.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Button danger onClick={() => props.setStep(2)}>Back</Button>
          {!props.isLoading && 
            <Button className="w-48" onClick={props.payNow}>Continue to payment</Button>
          }
          {props.isLoading && <div className="flex w-48 justify-center items-center"><LoadingSpinner /></div>}
        </div>
      </div>
    </div>
  );
}

export default Step3;