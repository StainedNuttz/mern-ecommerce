import React from 'react';
import Button from '../../shared/components/UI/Button';

import Card from '../../shared/components/UI/Card';

// todo
// * modal
// * store items in local storage if not logged in
// ! spater: store items in user DB if logged in

const CartItem = ({ data }) => {
  return (
    <Card className="p-3 py-3 flex justify-between items-center">
      <div className="flex justify-between">
        <h2 className="">{data.name}</h2>
      </div>
      <div className="flex space-x-10">
        <div className="flex space-x-4 items-center">
          <p className="font-bold">{data.price}</p>
          <input value={data.inCart} className="w-10 border border-gray-300 rounded-sm text-center p-1 font-light" />
        </div>
        <div className="flex justify-center items-center">
          <Button danger className="p-1">
            <i className="fa fa-fw fa-times text-white" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default CartItem;