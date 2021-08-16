import React, { useContext, useState, useEffect } from 'react';

import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';
import Card from '../../shared/components/UI/Card';
import Button from '../../shared/components/UI/Button';

import { AuthContext } from '../../shared/context/auth-context';
import { useHttp } from '../../shared/hooks/useHttp';
import Info from '../../shared/components/UI/Info';
import Splitter from '../../shared/components/UI/Splitter';

const ProfileOrders = props => {
  const auth = useContext(AuthContext);
  const [orders, setOrders] = useState();
  const [isLoading, success, error, sendReq] = useHttp();

  const [showProducts, setShowProducts] = useState(false);
  const [showShipping, setShowShipping] = useState(false);

  const { singleOrder, setSingleOrder } = props.singleOrder;

  useEffect(() => {
    const getOrders = async () => {
      let res;
      try {
        res = await sendReq(
          `/api/orders/user/${auth.userData.id}`,
          'GET'
        );
        if (res.length === 0) { throw 'Empty' }
        setOrders(res);
      } catch (err) {
        setOrders(null);
      }
    }
    getOrders();
  }, [sendReq, auth.userData]);

  return (
    <>
      <h2 className="text-3xl">Your orders</h2>
      {singleOrder && <Button className="mt-2" onClick={() => setSingleOrder(null)}>Back</Button>}
      <ul className="mt-2 space-y-2">
        {isLoading && <LoadingSpinner />}
        {!singleOrder && orders && !isLoading &&
          orders.map(o => (
            <li key={o._id}>
              <Card 
                className="p-3 w-[24rem] h-[6rem]"
                onClick={() => setSingleOrder(o)}
                growStyle="hover:w-[25rem] hover:h-[7rem] transition-w transition-h duration-300 ease-in-out"
              >
                <p className="">Order #<span className="font-bold">{o._id}</span></p>
                <div className="text-sm m-1">
                  <p className="">
                    Amount paid: <span className="font-bold">£{o.amountPaid}</span>
                  </p>
                  <p className="">
                    Ordered on: <span className="font-bold">{new Date(o.date).toLocaleDateString()}</span>
                  </p>
                </div>
              </Card>
            </li>
          ))
        }
        {singleOrder && orders && !isLoading &&
          <Card className="p-3">
            <div>Order <span className="font-bold">#{singleOrder._id}</span></div>
            <Info className="inline-block mt-2 mb-3" color="yellow">{singleOrder.status}</Info>
            <Splitter />
            <div className="mt-2 text-sm space-y-3">
              <div>
                <p>Amount paid</p>
                <p className="font-bold m-1">
                  £{singleOrder.amountPaid}
                </p>
              </div>
              <div>
                <p>Payment method</p>
                <p className="font-bold uppercase m-1">
                  {singleOrder.paymentMethod}
                </p>
              </div>
              <div>
                <p>Ordered on</p> 
                <p className="font-bold m-1">
                  {new Date(singleOrder.date).toLocaleString()}
                </p>
              </div>
              <div>
                <div>Products ordered
                  <button
                      className="font-bold ml-2 focus:outline-none"
                      onClick={() => setShowProducts(!showProducts)}>
                    <i className={`fa ${showProducts ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </button>
                  <ul className={`${showProducts ? 'block' : 'hidden'} font-bold m-3`}>
                    {
                      singleOrder.productsOrdered.map(p => {
                        return (
                          <li key={p._id}>
                            <Splitter />
                            <div className="font-normal my-2">
                              <p className="font-bold">£{p.price}</p>
                              <p className="ml-1">
                                <span className="text-xs">{p.qty}x</span> {p.name}
                              </p>
                            </div>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              </div>
              <div>
                <div>Shipping details 
                  <button 
                      className="font-bold ml-2 focus:outline-none"
                      onClick={() => setShowShipping(!showShipping)}>
                    <i className={`fa ${showShipping ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </button>
                </div> 
                <ul className={`${showShipping ? 'block' : 'hidden'} font-bold m-3`}>
                  {
                    Object.keys(singleOrder.address).map(a => {
                      switch (a) {
                        case 'name':
                          return <li key={a} className="mb-2">{singleOrder.address[a]}</li>
                        case 'email':
                          return <li key={a} className="mt-2">{singleOrder.address[a]}</li>
                        default:
                          return <li key={a}>{singleOrder.address[a]}</li>
                      }
                    })
                  }
                </ul>
              </div>
            </div>
          </Card>
        }
        {!isLoading && !orders && 
          <p>No orders yet</p>
        }
      </ul>
    </>
  );
}

export default ProfileOrders;