import React, { useContext } from 'react';

import { VALIDATE_REQUIRED } from '../../shared/utils/validations';
import { useHttp } from '../../shared/hooks/useHttp';
import { useForm } from '../../shared/hooks/useForm';

import { AuthContext } from '../../shared/context/auth-context';

import Form from '../../shared/components/Forms/Form';

const Admin = () => {
  const auth = useContext(AuthContext);
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

  const [isLoading, error, success, sendReq] = useHttp();

  const createProductHandler = async () => {
    try {
      await sendReq(
        '/api/products/new',
        'POST',
        JSON.stringify({
          brand: formState.inputs.brand.value,
          name: formState.inputs.name.value,
          price: formState.inputs.price.value,
          stock: formState.inputs.stock.value,
        }),
        { 'Authentication': `Bearer ${auth.token}` }
      );
      resetValues();
    } catch (err) {}
  }

  const [formState, changeHandler, submitHandler, resetValues] = useForm(inputs, { isValid: false }, createProductHandler);

  return (
    <>
      <h2 className="text-4xl font-bold mb-5">Admin Dashboard</h2>
      <div className="">
        <Form
          className="relative"
          btnText="Create"
          isLoading={isLoading}
          error={error}
          success={success}
          formState={formState}
          submitHandler={submitHandler}
          changeHandler={changeHandler}
          inputs={inputs}
        >
          <h3 className="text-2xl mb-4">Create product</h3>
        </Form>
        {/* <Form
          className="relative"
          btnText="Create"
          isLoading={isLoading}
          error={error}
          formState={formState}
          submitHandler={submitHandler}
          changeHandler={changeHandler}
          inputs={inputs}
        >
          <h3 className="text-2xl mb-4">Create product</h3>
        </Form>
        <Form
          className="relative"
          btnText="Create"
          isLoading={isLoading}
          error={error}
          formState={formState}
          submitHandler={submitHandler}
          changeHandler={changeHandler}
          inputs={inputs}
        >
          <h3 className="text-2xl mb-4">Create product</h3>
        </Form> */}
      </div>
    </>
  )
}

export default Admin;