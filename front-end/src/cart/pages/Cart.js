import React from 'react';
import Button from '../../shared/components/UI/Button';
import CartItem from '../components/CartItem';

const Cart = props => {
  const items = JSON.parse(localStorage.getItem('LOCAL_CART')) || [];

  return (
    <>
      <ul className="space-y-1">
        {
          items.map(i => (
            <CartItem data={i} />
          ))
        }
      </ul>
      <div className="flex justify-end mr-1 mt-4">
        <Button className="p-2" to="/checkout">Proceed to checkout</Button>
      </div>
    </>
  );
}

export default Cart;