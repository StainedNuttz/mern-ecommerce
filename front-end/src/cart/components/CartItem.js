import React, { useState } from 'react';

import Modal from '../../shared/components/UI/Modal';
import Button from '../../shared/components/UI/Button';

const CartItem = props => {
  const { data, cartProps } = props;
  const { totalCartPrice, setTotalCartPrice, deleteCartItem, updateCartItem } = cartProps;

  const [qty, setQty] = useState(data.qty);
  const [showModal, setShowModal] = useState(false);

  const incrementCart = () => {
    if (qty + 1 >= 100) return;
    const oldQty = qty;
    setTotalCartPrice(totalCartPrice + data.price);
    setQty(oldQty + 1);
    updateCartItem(data.id, 'qty', oldQty + 1);
  }

  const decrementCart = () => {
    if (qty - 1 <= 0) return;
    const oldQty = qty;
    setTotalCartPrice(totalCartPrice - data.price);
    setQty(qty - 1);
    updateCartItem(data.id, 'qty', oldQty - 1);
  }

  return (
    <>
      {showModal &&
        <Modal
          yes={() => {
            setShowModal(false);
            deleteCartItem(data.id);
          }}
          no={() => setShowModal(false)}>
          Remove item from cart?
        </Modal>
      }
      <tr className="border-t border-b border-gray-200 flex flex-col md:table-row relative">
        <td className="md:pl-2 md:py-5 md:pr-10 pr-32 md:text-sm text-xl mb-1 md:mb-0">{data.name}</td>

        <td className={`${data.stock > 0 ? 'text-green-500' : 'text-red-500'} text-xs md:text-base md:pl-4`}>
          {data.stock > 0 ? 'In stock' : 'Out of stock'}
        </td>

        <td className="text-sm md:text-base mb-16 md:mb-0">
          {`£${data.price.toFixed(2)}`}
        </td>

        <td className="absolute bottom-2 left-0 md:static">
          <div className="inline-flex items-center bg-white">
            <Button className="p-0 py-1 w-8 h-8" onClick={decrementCart}> - </Button>
            <span className="px-3 w-8 h-8 flex justify-center items-center">{qty}</span>
            <Button className="p-0 py-1 w-8 h-8" onClick={incrementCart}> + </Button>
          </div>
        </td>

        <td className="font-bold absolute bottom-1 right-1 md:static">
          {`£${(data.price * qty).toFixed(2)}`}
        </td>
      
        <td className="text-right md:pr-4 absolute top-2 right-1 md:static">
          <Button className="px-1.5 py-0.5 w-8 h-8" danger onClick={() => setShowModal(true)}>
            <i className="fa fa-times text-white" />
          </Button>
        </td>
      </tr>
    </>
  );
}

export default CartItem;