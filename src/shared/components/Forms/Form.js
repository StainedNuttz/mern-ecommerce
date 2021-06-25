import React from 'react';

import { useForm } from '../../hooks/useForm';

import Button from '../UI/Button';
import Input from './Input';

const Form = props => {
  const [formState, changeHandler, submitHandler] = useForm(props.formInputs);

  return (
    <form className="space-y-2" autoComplete="off">
      {
        props.formInputs.map(input => (
          <Input
            id={input.id}
            type={input.data.type}
            placeholder={input.data.placeholder}
            validErrors={input.data.validators}
            onChange={e => {
              changeHandler(input.id, e.target.value);
            }}
            formState={formState}
          />
        ))
      }
      <Button onClick={submitHandler} className="p-2 px-3 mt-1 md:mt-2">Submit</Button>
    </form>
  );
}

export default Form;