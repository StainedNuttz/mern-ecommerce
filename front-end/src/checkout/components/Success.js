import React, { useEffect } from 'react';

import Info from '../../shared/components/UI/Info';

const Success = props => {

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem('LOCAL_CART')) {
      localStorage.removeItem('LOCAL_CART');
    }
  }, []);

  const { orderDetails } = props;

  return (
    <div className="mb-8">
      <div className="bg-green-400 text-white p-8 flex items-center justify-center space-x-5">
        <i className="fa fa-4x fa-check-circle"></i>
        <h2 className="text-4xl font-light mb-2">We've got your order</h2>
      </div>
      <h2 className="mt-4">An order confirmation and invoice will be sent to:
        <span className="font-bold ml-2">{orderDetails.address.email}</span>
      </h2>
      <h2 className="text-2xl font-bold mt-5">Your order ID</h2>
      <p className="mt-1">{orderDetails._id}</p>
      <h2 className="text-2xl font-bold mt-5">Order details</h2>
      <div>
        <table className="table-fixed mt-4">
          <thead className="">
            <tr className="border-b">
              <th className="w-32 text-left pb-4">Name</th>
              <th className="w-32 text-center pb-4">Quantity</th>
              <th className="w-16 text-left pb-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.productsOrdered.map(p => (
              <tr key={p._id} className="border-b">
                <td className="pl-0 p-3">{p.name}</td>
                <td className="text-center">{p.qty}</td>
                <td className="">£{p.price * p.qty}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td className="font-bold pt-4">£{parseFloat(orderDetails.amountPaid).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Success;