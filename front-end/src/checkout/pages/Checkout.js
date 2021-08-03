import React, { useRef, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import Button from '../../shared/components/UI/Button';

import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';

import { useForm } from '../../shared/hooks/useForm';
import { VALIDATE_REQUIRED } from '../../shared/utils/validations';

import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';

const Checkout = props => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const colors = {
    disabled: 'text-gray-300',
    enabled: 'text-blue-300',
    current: 'text-blue-500',
  }

  const headers = {
    1: 'Enter your shipping details',
    2: 'Choose a payment method',
    3: 'Confirm details'
  }

  // for step 1
  const nextHandler = () => setStep(2);
  const addressInputs = [
    {
      id: 'name',
      data: {
        type: 'text',
        placeholder: 'Recipient name or company name',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in a name'
        },
        layout: 'col-span-2 mb-4'
      }
    },
  ]
  const [formState, changeHandler, submitHandler, resetValues] =
    useForm(addressInputs, { isValid: false }, nextHandler);

  return (
    <div>
      <ul className="flex text-sm space-x-12 justify-center my-6">
        <li className={step === 1 ? colors.current : (step > 1) ? colors.enabled : colors.disabled}>Shipping</li>
        <li className={step === 2 ? colors.current : (step > 2) ? colors.enabled : colors.disabled}>Payment</li>
        <li className={step === 3 ? colors.current : (step > 3) ? colors.enabled : colors.disabled}>Confirm & Pay</li>
      </ul>

      {/* steps */}
      <div className="flex justify-center">
        <div className="my-4">
          <h2 className="text-3xl mb-6">{headers[step]}</h2>
          {step === 1 && <Step1 formStuff={[formState, changeHandler, submitHandler, resetValues]} step={setStep} />}
          {step === 2 && <Step2 paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} step={setStep} />}
          {step === 3 && <Step3 paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} step={setStep} />}
        </div>
      </div>

    </div>
  );
}

export default Checkout;