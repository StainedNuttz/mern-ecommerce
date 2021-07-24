import React, { useContext } from 'react';

import { VALIDATE_EMAIL, VALIDATE_MAX, VALIDATE_MIN, VALIDATE_REQUIRED } from '../../shared/utils/validations';
import { useHttp } from '../../shared/hooks/useHttp';
import { useForm } from '../../shared/hooks/useForm';
import { AuthContext } from '../../shared/context/auth-context';

import Form from '../../shared/components/Forms/Form';

const Signup = () => {
  const auth = useContext(AuthContext);

  const [isLoading, error, success, sendRequest] = useHttp();

  const inputs = [
    {
      id: 'username',
      data: {
        type: 'text',
        placeholder: 'Username',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in a username',
          [VALIDATE_MAX]: { errorMsg: 'Your username must contain no more than 24 characters', params: 24 },
          [VALIDATE_MIN]: { errorMsg: 'Your username must contain at least 8 characters', params: 8 }
        }
      }
    },
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
          [VALIDATE_REQUIRED]: 'Please create a password',
          [VALIDATE_MIN]: { errorMsg: 'Your password must contain at least 8 characters', params: 8 }
        }
      }
    }
  ]

  const signupHandler = async () => { 
    console.log('hello')
    try {
      await sendRequest(
        '/api/signup',
        'POST',
        JSON.stringify({
          username: formState.inputs.username.value,
          email: formState.inputs.email.value,
          password: formState.inputs.password.value
        }),
        { 'Content-Type': 'application/json' }
      );
      auth.login();
    } catch (err) {
      console.log(err);
    }
  }

  const [formState, changeHandler, submitHandler] =
    useForm(inputs, { isValid: false }, signupHandler);

  return (
    <div className="flex justify-center">
      <Form
        className="w-[32rem] relative"
        btnText="Sign up"
        isLoading={isLoading}
        error={error}
        formState={formState}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        inputs={inputs}
      >
        <h2 className="text-3xl font-light mb-4">Create an account</h2>
      </Form>
    </div>
  );
}

export default Signup;