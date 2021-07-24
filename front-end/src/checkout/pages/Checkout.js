import React, { useRef, useState } from 'react';

import { useHttp } from '../../shared/hooks/useHttp';

import Button from '../../shared/components/UI/Button';

const Checkout = props => {
  const [isConfirmPay, setIsConfirmPay] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [isLoading, error, success, sendReq] = useHttp();

  const step1 = async () => {
    try {
      const res = await sendReq(
        '/api/checkout/order',
        'POST',
        JSON.stringify({
          items: [
            {
              name: 'lol',
              price: '49.99'
            }
          ],
          total_cost: '49.99'
        }),
        { 'Content-Type': 'application/json' }
      );
      console.log(res);
    } catch (err) { console.log(err) }
  }

  return (
    <div className="w-[320px]">
      {!isConfirmPay && !isPaid &&
        <Button onClick={step1} className="p-2 px-20 flex justify-center items-center tracking-wider">
          Pay with <i className="fab fa-cc-paypal ml-2 text-3xl"></i>
        </Button>
      }
      {isConfirmPay && 
        <div>
          <Button className="text-xl p-2">Pay now</Button>
        </div>
      }
      {isPaid && 
        <div>
          <h2 className="text-xl">Thank you, your order has been placed.</h2>
        </div>
      }
    </div>
  );
}

export default Checkout;