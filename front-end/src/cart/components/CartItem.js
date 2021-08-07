import React, { useState } from 'react';

import Card from '../../shared/components/UI/Card';
import Button from '../../shared/components/UI/Button';

const CartItem = props => {
  const { data } = props;
  const [inCartValue, setInCartValue] = useState(data.inCart);
  const [showModal, setShowModal] = useState(false);

  const incrementCart = () => {
    let value;
    if (inCartValue + 1 >= 100) return;
    setInCartValue(inCartValue + 1);
  }
  const decrementCart = () => {
    let value;
    if (inCartValue - 1 <= 0) return;
    setInCartValue(inCartValue - 1);
  }

  return (
    <>
      {showModal &&
        <Modal
          yes={() => {
            setShowModal(false);
            deleteCartItem(i.id)
          }}
          no={() => setShowModal(false)}>
          Remove item from cart?
        </Modal>
      }
      <tr className="border-t border-b border-gray-200">
        <td className="pl-2 py-5 text-sm">{data.name}</td>

        <td className={`${data.stock > 0 ? 'text-green-500' : 'text-red-500'} pl-4`}>
          {data.stock > 0 ? 'In stock' : 'Out of stock'}
        </td>

        <td className="">
          {`£${data.price.toFixed(2)}`}
          <em className="ml-1 font-light text-xs">each</em>
        </td>

        <td className="">
          <div className="inline-flex items-center bg-white">
            <Button className="p-0 py-1" onClick={decrementCart}> - </Button>
            <span className="px-3">{inCartValue}</span>
            <Button className="p-0 py-1" onClick={incrementCart}> + </Button>
          </div>
        </td>

        <td className="font-bold">
          {`£${(data.price * inCartValue).toFixed(2)}`}
        </td>
        
        <td className="text-right pr-4">
          <Button className="px-1 py-1" danger >
            <i className="fa fa-times text-white" />
          </Button>
        </td>
      </tr>
    </>
  );
}

export default CartItem;