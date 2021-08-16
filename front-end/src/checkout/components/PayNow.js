import React from 'react';

import { PayPalButton } from 'react-paypal-button-v2';

const PayNow = props => {
  return (
    <>
      {props.method === 'paypal' &&
        <div className="w-[24rem]">
          <p className="mb-2">Pay with</p>
          <PayPalButton
            amount={props.cartTotal}
            options={{
              clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
              disableFunding: 'card,credit,sofort',
              currency: 'GBP'
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: 'GBP',
                      value: props.cartTotal
                    }
                  }
                ]
              });
            }}
            onSuccess={() => {
              console.log('?');
              props.confirmOrder().then(() => props.setStep('success'))
            }}
          />
        </div>
      }
      {props.method === 'card' &&
        <div>
          stripe to be done
        </div>
      }
    </>
  );
}

export default PayNow;