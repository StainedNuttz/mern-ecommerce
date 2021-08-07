import React from 'react';

import Button from '../UI/Button';
import Input from './Input';

import LoadingSpinner from '../UI/LoadingSpinner';

const Form = props => {
  const { formState, changeHandler, submitHandler } = props;
  return (
    <form autoComplete="off" className={`w-full ${props.className}`}>
      {props.isLoading && <div className="my-2 flex justify-center"><LoadingSpinner /></div>}
      <div className={`grid gap-y-2 grid-cols-${props.cols} ${props.gap}`}>
        {props.inputs.map(input => {
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
                className={input.data.layout}
                id={input.id}
                key={input.id}
                disabled={props.isLoading}
                type={input.data.type}
                placeholder={input.data.placeholder}
                validityRules={validityRules}
                successText={input.data.successText}
                onChange={e => {
                  e.preventDefault();
                  changeHandler(input.id, e.target.value);
                }}
                formState={formState}
              />
            );
          })
        }
      </div>
      <div className="mt-1 md:mt-4 flex items-center">
        {props.button}
        {!props.button &&
          <Button
            onClick={submitHandler}>
              {props.btnText || 'Submit'}
          </Button>
        }
        {props.success && formState.submittedSuccess && <p className="text-green-500 font-bold text-base ml-3">{props.success}</p>}
        {props.error && <p className="text-red-500 text-base ml-3">{props.error}</p>}
      </div>
    </form>
  );
}

export default Form;