import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useHttp } from '../../shared/hooks/useHttp';

import ProductView from '../components/ProductView';
import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';

const Product = () => {
  const id = useParams().productId;
  const [isLoading, error, success, sendRequest] = useHttp();
  const [foundProduct, setFoundProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await sendRequest(
          `/api/products/${id}`,
        );
        setFoundProduct(res);
      } catch (err) {}
    }
    getProduct();
  }, [sendRequest]);

  return (
    <div className="text-center text-xl flex flex-col items-center">
      {isLoading && <LoadingSpinner />}
      {!isLoading && foundProduct && <ProductView product={foundProduct} />}
      {!isLoading && foundProduct === null &&
        <>
          <div>Product not found!</div>
          <Link to="/" className="text-blue-700 hover:text-blue-400 ">Go back</Link>
        </>
      }
    </div>
  );
}

export default Product;