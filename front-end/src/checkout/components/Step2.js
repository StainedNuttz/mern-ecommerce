import React, { useState } from 'react';

import Button from '../../shared/components/UI/Button';

const Step2 = props => {
  return (
    <div className="">
      {!props.paymentMethod && <p>ERROR</p>}
      <div>
        <input type="radio" checked onChange={() => props.setPaymentMethod('paypal')} name="pay" />
        <label className="ml-2">PayPal</label>
      </div>
      <div>
        <input type="radio" onChange={() => props.setPaymentMethod('card')} name="pay" />
        <label className="ml-2">Card</label>
      </div>

      <div className="mt-5 flex w-full justify-between">
        <Button danger onClick={() => props.setStep(1)}>Back</Button>
        <Button onClick={() => {
          if (props.paymentMethod !== null) { props.setStep(3) }
        }}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Step2;