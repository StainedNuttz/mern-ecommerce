import React from 'react';

import ProductListItem from './ProductListItem';

const ProductList = props => {
  if (props.products.length === 0) {
    return <h2>No products found</h2>
  } else {
    return (
      <ul className="grid grid-cols-1 gap-y-2 sm:gap-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
        {props.products.map(p => (
          <ProductListItem
            key={p.id}
            id={p.id}
            image={p.image}
            name={p.name}
            price={p.price}
            stock={p.stock}
            reviews={p.reviews}
            rating={p.rating}
          />
        ))}
      </ul>
    );
  }
}

export default ProductList;