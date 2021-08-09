import React from 'react';

import { useHttp } from '../../shared/hooks/useHttp';

import Form from '../../shared/components/Forms/Form';
import { VALIDATE_EMAIL, VALIDATE_REQUIRED } from '../../shared/utils/validations';
import Button from '../../shared/components/UI/Button';

// ! fix error here

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
    id: 'first',
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
    id: 'second',
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
    id: 'postal',
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
    id: 'phone',
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

// const addressInputs = [
//   {
//     id: 'name',
//     data: {
//       type: 'text',
//       placeholder: 'Recipient name or company name',
//       validityRules: {
//         [VALIDATE_REQUIRED]: 'Please enter in a name'
//       },
//       layout: 'col-span-2 mb-4'
//     }
//   },
// ]

const Step1 = props => {
  const [formState, changeHandler, submitHandler, resetValues] = props.formStuff;
  const [isLoading, error, success, sendReq] = useHttp();

  const btn =
    <div className ="flex w-full justify-end">
      <Button onClick={submitHandler}>Next</Button>
    </div>

  return (
    <div className="">
      <Form
        button={btn}
        className="w-full md:w-[32rem]"
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