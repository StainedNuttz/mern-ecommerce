import React, { useState, useContext } from 'react';

import { useHttp } from '../../shared/hooks/useHttp';
import { useHistory } from 'react-router';

import Button from '../../shared/components/UI/Button';
import Modal from '../../shared/components/UI/Modal';
import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';

import { AuthContext } from '../../shared/context/auth-context';

const ProductViewDelete = props => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const [isLoading, error, success, sendReq] = useHttp();
  const [modalShowing, setModalShowing] = useState(false);

  const showModal = () => { setModalShowing(true) }
  const hideModal = () => { setModalShowing(false) }

  const deleteHandler = async () => {
    try {
      const res = await sendReq(
        `/api/products/${props.productId}`,
        'DELETE',
        {},
        { 'Authorization': `Bearer ${auth.token}` }
      );
      history.go(0);
    } catch (err) {}
    hideModal();
  }

  return (
    <>
      <Button onClick={showModal} danger className="p-2 px-6">Delete product</Button>
      {modalShowing &&
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