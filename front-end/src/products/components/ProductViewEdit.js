import React from 'react';

import { useHttp } from '../../shared/hooks/useHttp';

import Button from '../../shared/components/UI/Button';
import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';

const ProductViewEdit = props => {
  const [isLoading, error, success, sendReq] = useHttp();

  const editHandler = async () => {
    setShowEditProductForm(true);
    // try {
    //   const res = await sendEditRequest(
    //     `/api/products/${props.productId}`,
    //     'PATCH',
    //     {

    //     },
    //     { 'Content-Type': 'application/json' }
    //   );
    // } catch (err) {}
  }

  return (
    <>
      
    </>
  );
}

export default ProductViewEdit;