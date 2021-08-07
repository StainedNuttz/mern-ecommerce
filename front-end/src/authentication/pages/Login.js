import React, { useContext } from 'react';

import { useForm } from '../../shared/hooks/useForm';
import { useHttp } from '../../shared/hooks/useHttp';

import { VALIDATE_REQUIRED, VALIDATE_EMAIL } from '../../shared/utils/validations';

import Form from '../../shared/components/Forms/Form';
import { AuthContext } from '../../shared/context/auth-context';

const Login = () => {
  const auth = useContext(AuthContext);
  
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
  
  const [isLoading, error, success, sendRequest] = useHttp();
  
  const loginHandler = async () => {    
    try {
      const res = await sendRequest(
        '/api/login',
        'POST',
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value
        }),
        {}
      );
      const { id, username, isAdmin, token } = res.user;
      auth.login({ id, username, isAdmin }, token);
    } catch (err) {
      resetValues(['password']);
    }
  }

  const [formState, changeHandler, submitHandler, resetValues] = useForm(inputs, { isValid: false }, loginHandler);

  return (
    <div className="flex justify-center">
      <Form
        className="max-w-[32rem]"
        btnText="Login"
        isLoading={isLoading}
        error={error}
        formState={formState}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        inputs={inputs}
      >
        <h2 className="text-3xl font-light mb-4">Log into your account</h2>
      </Form>
    </div>
  );
}

export default Login;