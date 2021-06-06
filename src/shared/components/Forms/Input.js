import React, { useReducer } from 'react';
import { validate, VALIDATE_REQUIRE } from '../../utils/validations';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators)
      }
    case 'TOUCH':
      return {
        ...state,
        beenTouched: true
      }
  }
}

const Input = props => {
  const [state, dispatch] = useReducer(reducer, {value: '', isValid: false, beenTouched: false});

  const changeHandler = e => {
    dispatch({
      type: 'CHANGE', 
      value: e.target.value,
      validators: [VALIDATE_REQUIRE(), VALIDATE_REQUIRE()]
    });
  }

  const blurHandler = e => {
    dispatch({
      type: 'TOUCH'
    })
  }

  let content;
  switch (props.type) {
    case 'textarea':
      content = <textarea 
        id={props.id}
        className={`border-gray-300 resize-none w-full focus:ring-0 text-gray-700
          ${!state.isValid && state.beenTouched && 'focus:border-red-500 border-red-500' || 'focus:border-blue-400'} px-2 text-base`}
        placeholder={props.placeholder}
        value={state.value}
        onBlur={blurHandler}
        onChange={changeHandler} />
      break;
  }

  return (
    <div>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      {content}
      {!state.isValid && state.beenTouched && <p className="text-sm mt-1 text-red-600">{props.errorText}</p>}
    </div>
  );
}

export default Input;