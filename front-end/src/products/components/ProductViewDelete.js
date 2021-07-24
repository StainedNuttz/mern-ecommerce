import React, { useState } from 'react';

import { useHttp } from '../../shared/hooks/useHttp';
import { useHistory } from 'react-router';

import Button from '../../shared/components/UI/Button';
import Modal from '../../shared/components/UI/Modal';
import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';


const ProductViewDelete = props => {
  const history = useHistory();
  const [isLoading, error, success, sendReq] = useHttp();
  const [productDeleteModalShowing, setProductDeleteModalShowing] = useState(false);

  const showModal = () => { setProductDeleteModalShowing(true) }
  const hideModal = () => { setProductDeleteModalShowing(false) }

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
      <Button onClick={showModal} danger className="p-2 px-6">Delete product</Button>
      {productDeleteModalShowing &&
        <Modal yes={deleteHandler} no={hideModal}>
          Are you sure you want to delete this product?
        </Modal>
      }
      {isLoading && <LoadingSpinner />}
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}

export default ProductViewDelete;