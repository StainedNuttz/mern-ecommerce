import React, { useEffect } from 'react';

import { useForm } from '../../hooks/useForm';

import Button from '../UI/Button';
import Input from './Input';

const Form = props => {
  const [formState, changeHandler, submitHandler] = useForm(props.initialFormInputs, props.initialFormState);

  return (
    <form className="space-y-2" autoComplete="off">
      {
        props.initialFormInputs.map(input => {
          const validityRules = input.data.validityRules;
          for (let r in validityRules) {
            if (typeof(validityRules[r]) === 'string') {
              const errorMsg = validityRules[r];
              validityRules[r] = {};
              validityRules[r].errorMsg = errorMsg;
            }
          }

          return (
            <Input
              id={input.id}
              type={input.data.type}
              placeholder={input.data.placeholder}
              validityRules={validityRules}
              successText={input.data.successText}
              onChange={e => {
                changeHandler(input.id, e.target.value);
              }}
              formState={formState}
            />
          );  
        })
      }
      <div className="mt-1 md:mt-2">
        <Button onClick={submitHandler} className="p-2 px-3">Submit</Button>
        {formState.submittedSuccess && <p className="text-green-500 font-bold mt-2">SUCCESS</p>}
      </div>
    </form>
  );
}

export default Form;