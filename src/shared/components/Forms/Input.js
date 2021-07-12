import React, { useState, useEffect } from 'react';

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
  const { id, type, placeholder, validityRules, successText, onChange, formState } = props;
  useEffect(() => {
    console.log(formState)
  }, [formState]);
  // formState contains info about actual validation, this input only stores the error message assigned to each possible error
  const formStateInput = formState.inputs[id];
  const validityState = formStateInput.validity;

  // display any validation errors
  const errors = (
    <div>
      {
        Object.keys(validityState).map(rule => {
          return !validityState[rule] && formState.submitted && <p className="text-sm mt-1 text-red-600">{validityRules[rule].errorMsg}</p>
        })
      }
    </div>
  );

  // re-render border styling
  let border = baseBorder;
  if (formState.submitted && !formStateInput.isValid) {
    border += borders.red;
  } else if (formState.submittedSuccess) {
    // border += borders.green;
    border += borders.default;
  } else {
    border += borders.default;
  }

  // render correct input type
  let content;
  switch (props.type) {
    case 'textarea':
      content = <textarea
        id={id}
        disabled={props.disabled}
        className={border}
        placeholder={placeholder}
        onBlur={() => setBeenTouched(true)}
        onChange={onChange}
        value={formStateInput.value}
      />
      break;
    default:
      content = <input
        id={id}
        disabled={props.disabled}
        type={type}
        className={border}
        placeholder={placeholder}
        onBlur={() => setBeenTouched(true)}
        onChange={onChange}
        value={formStateInput.value}
      />
  }

  return (
    <div>
      {content}
      {errors}
      {/* {formState.submittedSuccess && <p className="text-sm mt-1 text-green-600">{successText}</p>} */}
    </div>
  );
}

export default Input;