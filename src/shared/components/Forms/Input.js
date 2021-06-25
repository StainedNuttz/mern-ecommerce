import React, { useState } from 'react';

const borders = {
  default: ' focus:border-blue-400 border-gray-300',
  red: ' focus:border-red-500 border-red-500',
  green: ' focus:border-green-500 border-green-500'
}

const baseBorder = 'resize-none w-full focus:ring-0 text-gray-700 px-2 text-base';

const Input = props => {
  // this input's states
  const [beenTouched, setBeenTouched] = useState(false);

  // this input's data and parent form's state
  const { id, type, placeholder, validErrors, onChange, formState } = props;
  
  // formState contains info about actual validation, this input only stores the error message assigned to each possible error
  const inputState = formState.inputs[id];
  const validState = inputState.validators;

  // display any validation errors
  const errors = (
    <div>
      {
        Object.keys(validState).map(v => {
          // v = validations.js definitions
          return !validState[v] && formState.submitted && <p className="text-sm mt-1 text-red-600">{validErrors[v]}</p>
        })
      }
    </div>
  );

  // re-render border styling
  let border = baseBorder;
  if (formState.submitted && !inputState.isValid) {
    border += borders.red;
  } else {
    border += borders.default;
  }

  // render correct input type
  let content;
  switch (props.type) {
    case 'textarea':
      content = <textarea
        id={id}
        className={border}
        placeholder={placeholder}
        onBlur={() => setBeenTouched(true)}
        onChange={onChange}
        value={inputState.value}
      />
      break;
    default:
      content = <input
        id={id}
        type={type}
        className={border}
        placeholder={placeholder}
        onBlur={() => setBeenTouched(true)}
        onChange={onChange}
        value={inputState.value}
      />
  }

  return (
    <div>
      {content}
      {errors}
      {/* {formState.success && <p className="text-sm mt-1 text-green-600">{props.successText}</p>} */}
    </div>
  );
}

export default Input;