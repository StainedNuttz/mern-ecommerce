import React from 'react';

import { useAlert } from '../../shared/hooks/useAlert';

import Button from '../../shared/components/UI/Button';
import Alert from '../../shared/components/UI/Alert';

const AddToCart = ({ data }) => {
  const addToLocalStorage = () => {
    const items = JSON.parse(localStorage.getItem('LOCAL_CART')) || [];

    // if already in cart, increment existing item
    const foundItem = items.findIndex(i => i.id === data.id)
    if (foundItem !== -1) {
      items[foundItem].inCart++;
    } else {
      items.push(
        {
          id: data.id,
          name: data.name,
          price: data.price,
          stock: data.stock,
          inCart: 1
        }
      );
    }
    localStorage.setItem('LOCAL_CART', JSON.stringify(items));
  }

  const [alertAlive, showAlert, hideAlert] = useAlert(5);

  return (
    <>
      <Button 
        disabled={data.stock <= 0}
        className="mt-2 p-2"
        onClick={() => {
          showAlert();
          addToLocalStorage();
        }}>
          Add to cart
      </Button>
      <Alert id={data.id} close={hideAlert} show={alertAlive}>Added {data.name} to cart!</Alert>
    </>
  );
}

export default AddToCart;