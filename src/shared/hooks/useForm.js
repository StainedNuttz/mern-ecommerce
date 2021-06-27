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
        console.log(action.id)
        for (let i in state.inputs) {
          if (i === action.id) continue;
          formIsValid = formIsValid && state.inputs[i].isValid;
        }
      } else { formIsValid = false }

      console.log(action.id, inputIsValid)
      
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
        const resetInputs = {
          ...state.inputs
        }

        for (let i in state.inputs) {
          resetInputs[i] = {
            ...state.inputs[i],
            value: '',
            isValid: false,
            validity: validate('', state.inputs[i].validityRules)
          }
        }
        
        return {
          inputs: resetInputs,
          submitted: false,
          isValid: false,
          submittedSuccess: true,
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
  }
}

// custom hook to deal with form state
export const useForm = (initialInputs, initialFormState) => {  
  let inputs = {}
  let resetInputs = {}

  // initial values
  initialInputs.forEach(i => {
    inputs[i.id] = {
      value: i.data.value || '',
      isValid: i.data.isValid || false,
      validityRules: i.data.validityRules || {},
      validity: validate(i.data.value || '', i.data.validityRules)
    }
  });

  const initialFormValues = {
    submitted: false,
    submittedSuccess: false,
    isValid: initialFormState && initialFormState.isValid || false,
    inputs
  }

  const [formState, dispatch] = useReducer(formReducer, initialFormValues);

  const submitHandler = e => {
    e.preventDefault();
    dispatch({
      type: 'SUBMIT'
    })
  }

  const changeHandler = (id, value) => {
    dispatch({
      type: 'INPUT_CHANGE',
      id,
      value
    });
  }

  return [formState, changeHandler, submitHandler];
}