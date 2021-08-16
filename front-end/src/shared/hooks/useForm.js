import { useReducer, useCallback, useEffect } from 'react';
import { validate } from '../utils/validations';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true, inputIsValid = true;

      const inp = state.inputs[action.id];
      // check validity of current input
      const validityState = validate(action.value, inp.validityRules);
      for (let v in validityState) {
        if (!validityState[v]) {
          inputIsValid = false;
          break;
        }
      }

      // check validity of all other inputs and determine main form validity
      if (inputIsValid) {
        for (let i in state.inputs) {
          if (i === action.id) continue;
          formIsValid = formIsValid && state.inputs[i].isValid;
        }
      } else { formIsValid = false }
      
      return {
        ...state,
        isValid: formIsValid,
        submittedSuccess: state.submittedSuccess ? false : state.submittedSuccess,
        inputs: {
          ...state.inputs,
          [action.id]: {
            ...state.inputs[action.id],
            value: action.value,
            isValid: inputIsValid,
            validity: validityState
          }
        }
      }

    case 'SUBMIT':
      // IF FORM IS VALID
      if (state.isValid) {
        action.onSubmit();
        return {
          ...state,
          submittedSuccess: true
        }
        
      // IF FORM IS ALREADY SUCCESSFUL
      } else if (state.submittedSuccess) {
        return {
          ...state,
          submitted: true,
          submittedSuccess: false
        }
      // IF FORM IS NOT VALID
      } else if (!state.isValid) {
        return {
          ...state,
          submitted: true,
        }
      }

    case 'RESET':
      // current form inputs
      const resetInputs = {
        ...state.inputs
      }

      let inputsToReset;
      // if no args, we will just clear all inputs instead
      inputsToReset = action.inputsToReset || Object.keys(state.inputs);
      
      // for each input to reset (using matching indexes)
      inputsToReset.forEach(i => {
        resetInputs[i] = {
          ...resetInputs[i],
          value: '',
          isValid: false,
          validity: validate('', resetInputs[i].validityRules)
        }
      });

      return {
        inputs: resetInputs,
        submitted: false,
        isValid: false,
        submittedSuccess: true,
      }
  }
}
 
// custom hook to deal with form state
export const useForm = (initialInputs, initialFormState, onSubmit) => {  
  let inputs = {}

  // initial values
  initialInputs.forEach(i => {
    const value = i.data.value || '';
    inputs[i.id] = {
      value: value,
      isValid: i.data.isValid || (Object.entries(i.data.validityRules).length === 0 ? true : false),
      validityRules: i.data.validityRules || {},
      validity: validate(value, i.data.validityRules)
    }
  });

  const initialFormValues = {
    submitted: false,
    submittedSuccess: false,
    isValid: initialFormState.isValid || false,
    inputs
  }

  const [formState, dispatch] = useReducer(formReducer, initialFormValues);

  const submitHandler = e => {
    e.preventDefault();
    dispatch({
      type: 'SUBMIT',
      onSubmit
    });
    return formState.isValid;
  }

  const changeHandler = (id, value) => {
    value = value.toString();
    dispatch({
      type: 'INPUT_CHANGE',
      id,
      value
    });
  }

  const resetValues = inputsToReset => {
    dispatch({
      type: 'RESET',
      inputsToReset
    });
  }

  return [formState, useCallback(changeHandler, []), submitHandler, resetValues];
}