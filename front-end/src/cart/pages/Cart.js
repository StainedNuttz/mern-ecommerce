import React, { useEffect, useState } from 'react';

import { useHttp } from '../../shared/hooks/useHttp';

import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';
import Button from '../../shared/components/UI/Button';
import CartItem from '../components/CartItem';

const Cart = props => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('LOCAL_CART')) || []);
  const [showModal, setShowModal] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  const [isLoading, error, success, sendReq] = useHttp();

  const deleteCartItem = id => {
    const cart = JSON.parse(localStorage.getItem('LOCAL_CART'));
    const newCart = cart.filter(ci => ci.id !== id);
    localStorage.setItem('LOCAL_CART', JSON.stringify(newCart));
    setCartItems(newCart);
  }

  // on page load, refresh cart data in local storage
  useEffect(() => {
    const refreshCartData = async () => {
      // get array of just product IDs from cart saved in local storage
      console.log(cartItems);
      const productIds = cartItems.map(ci => ci.id);
      if (productIds.length === 0) return;

      // create query string for GET request
      let queryString = 'ids[]=' + productIds[0];
      productIds.forEach((pid, i) => {
        if (i === 0) return;
        queryString += '&ids[]=' + pid;
      });

      // grab all products from selected product IDs
      let res;
      try {
        res = await sendReq(
          `/api/products?${queryString}`,
          'GET'
        );
      } catch (err) { }

      // loop over cart items, update each one with any new data from back-end
      let newCart = [];
      let newCartTotal = 0;
      for (let ci of cartItems) {
        // refreshedData = NEW PRODUCT DATA
        // ci = OLD PRODUCT DATA (we continue to use the inCart var only)
        const refreshedData = res.products[res.products.findIndex(p => p.id === ci.id)];
        newCartTotal += refreshedData.price * ci.inCart;
        if (refreshedData) {
          newCart.push({
            id: refreshedData.id,
            inCart: ci.inCart,
            name: refreshedData.name,
            price: refreshedData.price,
            stock: refreshedData.stock
          });
        }
      }
      // update cart state
      localStorage.setItem('LOCAL_CART', JSON.stringify(newCart));
      setCartTotal(newCartTotal.toFixed(2));
      setCartItems(newCart);
    }
    refreshCartData();
  }, []);

  return (
    <>
      {isLoading && <div className="flex justify-center"><LoadingSpinner /></div>}
      {!isLoading && 
        <>
          <div className="w-4/5 mx-auto">
            <h2 className="mb-4 text-4xl">Your cart</h2>
            <table className="w-full table-fixed">
              <thead className="">
                <tr className="">
                  <th className=""></th>
                  <th className=""></th>
                  <th className=""></th>
                  <th className=""></th>
                  <th className="w-16"></th>
                  <th className="w-16"></th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems.map(i => (
                    <CartItem onDelete={() => setShowModal(true)} data={i} />
                  ))
                }
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="py-8">
                    <h3 className="text-lg tracking-wide">Total</h3>
                    <span className="text-4xl font-bold">{`£${cartTotal}`}</span>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end">
              <Button className="block p-3 w-64" to="/checkout">Proceed to checkout</Button>
            </div>
          </div>
        </>
      }
    </>
  );
}

export default Cart;