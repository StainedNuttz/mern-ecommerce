import React, { useContext } from 'react';

import { VALIDATE_REQUIRED, VALIDATE_EMAIL, VALIDATE_MAX } from '../../shared/utils/validations';

import Form from '../../shared/components/Forms/Form';
import { AuthContext } from '../../shared/context/auth-context';

const Login = () => {
  const auth = useContext(AuthContext);

  const initialFormState = {
    isValid: false
  }

  const inputs = [
    {
      id: 'email',
      data: {
        type: 'text',
        placeholder: 'Email',
        validityRules: {
          [VALIDATE_EMAIL]: 'Please enter in a valid email'
        }
      }
    },
    {
      id: 'password',
      data: {
        type: 'password',
        placeholder: 'Password',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in your password',
        }
      }
    }
  ]

  return <Form onSubmit={auth.login} btnText="Login" initialFormInputs={inputs} initialFormState={initialFormState} />
}

export default Login;