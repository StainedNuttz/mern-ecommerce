import React, { useState, useContext } from 'react';

import { VALIDATE_REQUIRED } from '../../shared/utils/validations';
import { useForm } from '../../shared/hooks/useForm';
import { useHttp } from '../../shared/hooks/useHttp';
import { AuthContext } from '../../shared/context/auth-context';

import Form from '../../shared/components/Forms/Form';
import Button from '../../shared/components/UI/Button';
import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';

const ProductViewEdit = props => {
  const auth = useContext(AuthContext);
  const [isLoading, error, success, sendReq] = useHttp();
  const [formShowing, setFormShowing] = useState(false);

  const editHandler = async () => {
    try {
      const res = await sendReq(
        `/api/products/${props.productId}`,
        'PATCH',
        JSON.stringify({
          brand: formState.inputs.brand.value,
          name: formState.inputs.name.value,
          price: formState.inputs.price.value,
          stock: formState.inputs.stock.value
        }),
        { 'Authorization': `Bearer ${auth.token}` }
        );
    } catch (err) {}
  }

  const getProductValues = async () => {
    try {
      const res = await sendReq(
        `/api/products/${props.productId}`,
        'GET'
      );

      changeHandler('brand', res.brand);
      changeHandler('name', res.name);
      changeHandler('price', res.price.toFixed(2));
      changeHandler('stock', res.stock);
    } catch (err) {}
  }

  const inputs = [
    {
      id: 'brand',
      data: {
        type: 'text',
        placeholder: 'Product brand',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in a brand'
        }
      }
    },
    {
      id: 'name',
      data: {
        type: 'text',
        placeholder: 'Product name',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in a name'
        }
      }
    },
    {
      id: 'price',
      data: {
        type: 'text',
        placeholder: 'Product price',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in a price'
        }
      }
    },
    {
      id: 'stock',
      data: {
        type: 'text',
        placeholder: 'Product stock',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in a stock'
        }
      }
    }
  ]
  const [formState, changeHandler, submitHandler] = useForm(inputs, { isValid: false }, editHandler);

  return (
    <>
      <Button 
        className="p-2 px-6"
        secondary
        onClick={() => {
          // reducing amount of get requests when editing
          if (formState.isValid) {
            setFormShowing(!formShowing);
          } else {
            getProductValues();
            setFormShowing(true);
          }
        }}
      >
       Edit product
      </Button>
      {formShowing &&
        <Form
          inputs={inputs}
          formState={formState}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          isLoading={isLoading}
          error={error}
          success={success}
          btnText="Save"
        />
      }
    </>
  );
}

export default ProductViewEdit;