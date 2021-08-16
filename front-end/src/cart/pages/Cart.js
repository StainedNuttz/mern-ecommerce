import React, { useEffect, useState } from 'react';

import { useHttp } from '../../shared/hooks/useHttp';

import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';
import Button from '../../shared/components/UI/Button';
import CartItem from '../components/CartItem';

const Cart = props => {
  const [cartItems, setCartItems] = useState(null);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  
  /**
  * Makes changes to the cart stored in localStorage and update states
  * @param id - MongoDB product ID
  * @param property - The property to change
  * @param value - The value to set the property to
  **/
  const updateCartItem = (id, property, value) => {
    const cart = JSON.parse(localStorage.getItem('LOCAL_CART'));
    const index = cart.findIndex(ci => ci.id === id);

    // update states depending on property
    if (property === 'price') {
      setTotalCartPrice(totalCartPrice + cart[index].price);
    }
    
    // save to local storage
    cart[index][property] = value;
    localStorage.setItem('LOCAL_CART', JSON.stringify(cart));
    setCartItems(cart);
  }
  
  const deleteCartItem = id => {
    const cart = JSON.parse(localStorage.getItem('LOCAL_CART'));
    const newCart = cart.filter(ci => {
      if (ci.id === id) {
        setTotalCartPrice(totalCartPrice - ci.price * ci.qty);
        return false;
      } else { return true }
    });
    
    if (newCart.length === 0) {
      localStorage.removeItem('LOCAL_CART');
      setCartItems(null);
    } else {
      localStorage.setItem('LOCAL_CART', JSON.stringify(newCart));
      setCartItems(newCart);
    }
  }

  const [isLoading, error, success, sendReq] = useHttp();

  // on page load, refresh cart data in local storage
  useEffect(() => {
    const refreshCartData = async () => {
      // get array of just product IDs from cart saved in local storage
      const cart = JSON.parse(localStorage.getItem('LOCAL_CART'));
      if (!cart) return;

      const productIds = cart.map(ci => ci.id);
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
      for (let ci of cart) {
        // refreshedData = NEW PRODUCT DATA
        // ci = OLD PRODUCT DATA (we continue to use the inCart var only)
        const refreshedData = res.products[res.products.findIndex(p => p.id === ci.id)];
        newCartTotal += refreshedData.price * ci.qty;
        if (refreshedData) {
          newCart.push({
            id: refreshedData.id,
            qty: ci.qty,
            name: refreshedData.name,
            price: refreshedData.price,
            stock: refreshedData.stock
          });
        }
      }
      // update cart state
      localStorage.setItem('LOCAL_CART', JSON.stringify(newCart));
      setTotalCartPrice(newCartTotal);
      setCartItems(newCart);
    }
    if (!cartItems) {
      refreshCartData();
    }
  }, [cartItems, sendReq]);

  return (
    <>
      {isLoading && <div className="flex justify-center"><LoadingSpinner /></div>}
      {!isLoading && 
        <>
          <div className="lg:w-4/5 mx-auto">
            <h2 className="my-8 text-4xl">Your cart {!cartItems && 'is empty'}</h2>
            {cartItems &&
              <>
                <table className="w-full table-fixed">
                  <thead className="hidden md:table-header-group">
                    <tr className="">
                      <th className=""></th>
                      <th className="md:w-40"></th>
                      <th className="md:w-16 md:pr-20"></th>
                      <th className="md:w-32 md:pr-40"></th>
                      <th className="md:w-16 md:pr-20"></th>
                      <th className="md:w-16"></th>
                    </tr>
                  </thead>
                  <tbody className="block md:table-row-group">
                    {
                      cartItems.map(i => (
                        <CartItem
                          key={i.id}
                          cartProps={{totalCartPrice, setTotalCartPrice, deleteCartItem, updateCartItem}}
                          onDelete={() => setShowModal(true)}
                          data={i}
                        />
                      ))
                    }
                    <tr className="flex justify-end md:table-row">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="py-8">
                        <h3 className="text-lg tracking-wide">Total</h3>
                        <span className="text-4xl font-bold">{`£${totalCartPrice.toFixed(2)}`}</span>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-end">
                  <Button className="block p-3 w-64" to="/checkout">Proceed to checkout</Button>
                </div>
              </>
          }
          </div>
        </>
      }
    </>
  );
}

export default Cart;