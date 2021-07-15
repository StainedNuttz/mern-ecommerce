import React, { useEffect, useState } from 'react';
import ProductList from '../../products/components/ProductList';

import { useHttp } from '../../shared/hooks/useHttp';

import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';

const Home = props => {
  const [isLoading, error, success, sendRequest] = useHttp();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await sendRequest(
          '/api/products',
          'GET'
        );
        setProducts(res.products);
      } catch (err) {}
    }
    getProducts();
  }, [sendRequest]);


  return (
    <>
      {isLoading && <div className="flex justify-center"><LoadingSpinner /></div>}
      {!isLoading && (!products || products.length === 0) && <h2>No products found</h2>}
      {!isLoading && products && <ProductList products={products} />}
    </>
  );
}

export default Home;