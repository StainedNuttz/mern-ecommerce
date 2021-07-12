import React from 'react';

import image4 from '../../home/pages/beer.jpg';

import ProductListItem from './ProductListItem';

const ProductList = props => {
  return (
    <ul className="grid grid-cols-1 gap-y-2 sm:gap-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
      {props.products.map(p => (
        <ProductListItem
          key={p.id}
          id={p.id}
          // image={p.image}
          image={image4}
          brand={p.brand}
          name={p.name}
          price={`£${p.price.toFixed(2)}`}
          stock={p.stock}
          reviews={p.reviews.length}
          rating={p.rating}
        />
      ))}
    </ul>
  );
}

export default ProductList;