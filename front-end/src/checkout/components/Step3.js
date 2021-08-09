import React from 'react';

import Button from '../../shared/components/UI/Button';

const Step3 = props => {
  const cartItems = JSON.parse(localStorage.getItem('LOCAL_CART'));
  let cartTotal = 0;

  return (
    <div>
      <div className="space-y-2">
        <p>Payment method: <span className="uppercase">{props.paymentMethod}</span></p>
        <ul className="">
          Your items:
          {cartItems && cartItems.map(ci => {
            cartTotal += ci.price * ci.qty;
            return (
              <li className="ml-2">
                <p>
                  <span className="text-xs mr-2">{ci.qty} x</span>
                  <span className="text-lg">{ci.name}</span>
                </p>
              </li>
            );
          })}
        </ul>
        <div className="">
          <p>Total:</p>
          <span className="font-bold text-3xl">{cartTotal}</span>
        </div>
        <Button onClick={() => props.step(2)}>Back</Button>
      </div>
    </div>
  );
}

export default Step3;