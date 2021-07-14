import React from 'react';

import { useHttp } from '../../shared/hooks/useHttp';

import Button from '../../shared/components/UI/Button';
import { useHistory } from 'react-router';
import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';

const ProductViewDelete = props => {
  const history = useHistory();
  const [isLoading, error, success, sendReq] = useHttp();

  const deleteHandler = async () => {
    try {
      const res = await sendReq(
        `/api/products/${props.productId}`,
        'DELETE'
      );
      history.go(0);
    } catch (err) { }
  }

  return (
    <>
      <Button onClick={deleteHandler} danger className="p-2 px-6">Delete product</Button>
      {isLoading && <LoadingSpinner />}
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}

export default ProductViewDelete;