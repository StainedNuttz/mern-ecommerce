import { useReducer, useCallback, useEffect } from 'react';
import { validate } from '../utils/validations';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true, inputIsValid = true;
      
      console.log(action.value)
      
      const currentInputState = state.inputs[action.id];

      // check validity of current input
      const validity = validate(action.value, action.validators);
      for (let v in validity) {
        if (!v) {
          inputIsValid = false;
          break;
        }
      }

      // check validity of all other inputs and determine main form validity
      if (inputIsValid) {
        for (let i in state.inputs) {
          formIsValid = formIsValid && state.inputs[i].isValid;
        }
      } else { formIsValid = false }
      
      return {
        ...state,
        isValid: formIsValid,
        inputs: {
          ...state.inputs,
          [action.id]: {
            ...state.inputs[action.id],
            value: action.value,
            isValid: inputIsValid,
            validity
          }
        }
      }

    case 'SUBMIT':
      if (state.isValid) {
        return {
          ...state,
          submittedSuccess: true,
        }
      } else {
        return {
          ...state,
          submitted: true,
        }
      }
    case 'RESET_TYPE':
      return action.initialFormState;
    case 'RESET_SUBMIT':
      return {
        ...action.initialFormState,
        submitted: true
      }
  }
}

// custom hook to deal with form state
export const useForm = initialInputs => {  
  let inputs = {}

  initialInputs.forEach(i => {
    inputs[i.id] = {
      value: i.data.value || '',
      isValid: i.data.isValid || false,
      validators: i.data.validators || {}
    }
  });

  const initialFormState = {
    submitted: false,
    submittedSuccess: false,
    isValid: false,
    inputs: inputs
  }

  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const submitHandler = e => {
    e.preventDefault();
    if (formState.submittedSuccess) {
      dispatch({
        type: 'RESET_SUBMIT',
        initialFormState
      })
    } else {
      dispatch({
        type: 'SUBMIT',
      });
    }
  }

  const changeHandler = (id, value) => {
    if (formState.submittedSuccess) {
      dispatch({
        type: 'RESET_TYPE',
        initialFormState
      })
    } else {
      dispatch({
        type: 'INPUT_CHANGE',
        id,
        value
      });
    }
  }

  return [formState, changeHandler, submitHandler];
}