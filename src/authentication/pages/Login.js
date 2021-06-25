import React, { useEffect } from 'react';

import { VALIDATE_REQUIRED, VALIDATE_EMAIL, VALIDATE_MAX } from '../../shared/utils/validations';

import Form from '../../shared/components/Forms/Form';

const Login = () => {
  const inputs = [
    {
      id: 'email',
      data: {
        type: 'text',
        placeholder: 'Email',
        validators: {
          [VALIDATE_EMAIL]: 'Please enter in a valid email'
        }
      }
    },
    {
      id: 'password',
      data: {
        type: 'password',
        placeholder: 'Password',
        validators: {
          [VALIDATE_REQUIRED]: 'Please enter in your password',
          [VALIDATE_MAX]: 'Your password must be less than 16 characters'
        }
      }
    }
  ]

  return <Form formInputs={inputs} />
}

export default Login;