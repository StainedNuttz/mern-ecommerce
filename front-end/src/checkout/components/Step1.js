import React, { useEffect } from 'react';

import { useHttp } from '../../shared/hooks/useHttp';
import { useForm } from '../../shared/hooks/useForm';
import { VALIDATE_REQUIRED, VALIDATE_EMAIL } from '../../shared/utils/validations';

import Form from '../../shared/components/Forms/Form';
import Button from '../../shared/components/UI/Button';

const Step1 = props => {
  const [isLoading, error, success, sendReq] = useHttp();

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
    {
      id: 'line1',
      data: {
        type: 'text',
        placeholder: 'Address line 1',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in an address'
        },
        layout: 'col-span-2'
      }
    },
    {
      id: 'line2',
      data: {
        type: 'text',
        placeholder: 'Address line 2',
        validityRules: {},
        layout: 'col-span-2'
      }
    },
    {
      id: 'country',
      data: {
        type: 'text',
        placeholder: 'Country of residence',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in a country',
        },
        layout: 'col-span-1'
      }
    },
    {
      id: 'city',
      data: {
        type: 'text',
        placeholder: 'City or town',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in a city or town',
        },
        layout: 'col-span-1'
      }
    },
    {
      id: 'state',
      data: {
        type: 'text',
        placeholder: 'State or county',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in a state or county'
        },
        layout: 'col-span-1'
      }
    },
    {
      id: 'postalCode',
      data: {
        type: 'text',
        placeholder: 'Postal or zip code',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in a postal or zip code'
        },
        layout: 'col-span-1'
      }
    },
    {
      id: 'email',
      data: {
        type: 'text',
        placeholder: 'Email',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in an email'
          // [VALIDATE_EMAIL]: 'Please enter in a valid email'
        },
        layout: 'col-span-1 mt-4'
      }
    },
    {
      id: 'phoneNumber',
      data: {
        type: 'text',
        placeholder: 'Phone number',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in a phone number'
        },
        layout: 'col-span-1 mt-4'
      }
    }
  ]

  const [formState, changeHandler, submitHandler, resetValues] =
    useForm(addressInputs, { isValid: false }, () => {})
  ;

  const btn =
    <div className ="flex w-full justify-end">
      <Button onClick={e => {
        if (submitHandler(e)) {
          const address = {}
          for (let i in formState.inputs) {
            address[i] = formState.inputs[i].value;
          }
          props.address.current = address;
          // save address into local storage as well for persisting address for user
          localStorage.setItem('delivery_address', JSON.stringify(address));
          
          props.setStep(2);
        }
      }}>Next</Button>
    </div>

  useEffect(() => {
    const address = JSON.parse(localStorage.getItem('delivery_address'));
    if (address) {
      for (let a in address) {
        changeHandler(a, address[a]);
      }
    }
  }, []);

  return (
    <div className="">
      <Form
        button={btn}
        className=""
        cols="2"
        gap="gap-2"
        btnText="Next"
        isLoading={isLoading}
        error={error}
        formState={formState}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        inputs={addressInputs}
      />
    </div>
  );
}

export default Step1;