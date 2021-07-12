import React from 'react';

import Button from '../UI/Button';
import Input from './Input';

import LoadingSpinner from '../UI/LoadingSpinner';

const Form = props => {
  const { formState, changeHandler, submitHandler } = props;

  return (
    <form className={`${props.className} space-y-2`} autoComplete="off">
      {props.children}
      {props.isLoading && <div className="flex justify-center"><LoadingSpinner /></div>}
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
              id={input.id}
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
      <div className="mt-1 md:mt-2 flex items-center">
        <Button
          onClick={submitHandler}
          className="p-2 px-3">
            {props.btnText || 'Submit'}
        </Button>
        {props.error && <p className="text-red-500 font-bold ml-3">{props.error}</p>}
      </div>
    </form>
  );
}

export default Form;