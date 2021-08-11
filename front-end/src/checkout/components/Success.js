import React, { useEffect } from 'react';

const Success = props => {

  useEffect(() => {
    if (localStorage.getItem('LOCAL_CART')) {
      localStorage.removeItem('LOCAL_CART');
    }
  }, []);

  return (
    <div>

    </div>
  );
}

export default Success;