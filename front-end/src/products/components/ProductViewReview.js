import React, { useContext } from 'react';

import Card from '../../shared/components/UI/Card';
import Info from '../../shared/components/UI/Info';
import Form from '../../shared/components/Forms/Form';

import { VALIDATE_MIN, VALIDATE_MAX, VALIDATE_REQUIRED } from '../../shared/utils/validations';
import { useForm } from '../../shared/hooks/useForm';
import { useHttp } from '../../shared/hooks/useHttp';

import { AuthContext } from '../../shared/context/auth-context';

const inputs = [
  {
    id: 'review-title',
    data: {
      type: 'text',
      placeholder: 'Title',
      validityRules: {
        [VALIDATE_REQUIRED]: 'A title is required',
        [VALIDATE_MAX]: 'Your title must contain no more than 30 characters'
      }
    }
  },
  {
    id: 'review-text',
    data: {
      type: 'textarea',
      placeholder: 'Write a review',
      validityRules: {
        [VALIDATE_REQUIRED]: 'Please enter in a review before submitting',
        [VALIDATE_MIN]: { errorMsg: 'Your review must contain at least 5 characters', params: 5 },
        [VALIDATE_MAX]: { errorMsg: 'Your review must contain less than 300 characters', params: 300 }
      }
    }
  }
]

const ProductViewReview = props => {
  const auth = useContext(AuthContext);
  const [isLoading, error, success, sendReq] = useHttp();
  
  const submitReview = async () => {
    try {
      await sendReq(
        `/api/products/${props.productId}/review`,
        'POST',
        JSON.stringify({
          title: formState.inputs['review-title'].value,
          text: formState.inputs['review-text'].value,
          rating: 5,
          user: auth.userData.id,
          date: new Date()
        }),
        { 'Authorization': `Bearer ${auth.token}` }
      );
      console.log(auth.token)
      resetValues();
    } catch (err) {
    }
  }

  const [formState, changeHandler, submitHandler, resetValues] =
    useForm(inputs, { isValid: false }, submitReview);

  return (
    <Card ref={props.writeReviewRef} className="p-3 md:col-span-2 text-left">
      <Info color="yellow">
        You purchased this item on <span className="font-semibold">Jul 13</span>
      </Info>
      <Form
        className="relative"
        btnText="Submit"
        isLoading={isLoading}
        error={error}
        success={success}
        formState={formState}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        inputs={inputs}
      />
    </Card>
  );
}

export default ProductViewReview;