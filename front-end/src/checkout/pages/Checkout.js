import React, { useState, useContext, useEffect, useRef } from 'react';
import { Redirect } from 'react-router';

import { AuthContext } from '../../shared/context/auth-context';
import { useHttp } from '../../shared/hooks/useHttp';

import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Success from '../components/Success';

import Button from '../../shared/components/UI/Button';

const Checkout = props => {
  const auth = useContext(AuthContext);

  const [step, setStep] = useState(1);
  const [formInputs, setFormInputs] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const address = useRef({});
  const cartTotal = useRef(0);

  const cartItems = JSON.parse(localStorage.getItem('LOCAL_CART'));

  const colors = {
    disabled: 'text-gray-300',
    enabled: 'text-blue-300',
    current: 'text-blue-500',
  }

  const headers = {
    1: 'Enter your shipping details',
    2: 'Choose a payment method',
    3: 'Confirm details',
    4: 'We\'ve got your order'
  }
  
  const [isLoading, error, success, sendReq] = useHttp();

  useEffect(() => {
    let amountPaid = 0;
    if (cartItems) {
      cartItems.forEach(ci => amountPaid += ci.price * ci.qty);
      cartTotal.current = amountPaid;
    }
  }, []);

  const confirmOrder = async () => {
    const productsOrdered = [];
    let amountPaid = 0;
    cartItems.forEach(ci => {
      productsOrdered.push({
        productId: ci.id,
        name: ci.name,
        price: ci.price,
        qty: ci.qty
      });
    });

    try {
      const res = await sendReq(
        '/api/orders',
        'POST',
        JSON.stringify({
          productsOrdered,
          amountPaid: cartTotal.current.toString(),
          paymentMethod,
          address: address.current,
          user: auth.userData && auth.userData.id || null
        }),
        { 'Authorization': `Bearer ${auth.token}` }
      );
      setStep(4);
    } catch (err) {}
  }

  if (!cartItems) {
    return <Redirect to="/cart" />
  }

  return (
    <div>
      <ul className="flex text-sm space-x-12 justify-center my-6">
        <li className={step === 1 ? colors.current : (step > 1) ? colors.enabled : colors.disabled}>Shipping</li>
        <li className={step === 2 ? colors.current : (step > 2) ? colors.enabled : colors.disabled}>Payment</li>
        <li className={step === 3 ? colors.current : (step > 3) ? colors.enabled : colors.disabled}>Confirm & Pay</li>
      </ul>

      {/* steps */}
      <div className="flex justify-center">
        <div className="my-4 w-[32rem]">
          <h2 className="text-3xl mb-6">{headers[step]}</h2>
          {step === 0 && <Button to="/cart">Go back</Button>}
          {step === 1 && <Step1 address={address} setFormInputs={setFormInputs} setStep={setStep} />}
          {step === 2 && <Step2 paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} setStep={setStep} />}
          {step === 3 && <Step3 isLoading={isLoading} confirmOrder={confirmOrder} address={address} cartTotal={cartTotal} paymentMethod={paymentMethod} setStep={setStep} />}
          {step === 4 && <Success />}
        </div>
      </div>

    </div>
  );
}

export default Checkout;