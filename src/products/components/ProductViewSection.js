import React from 'react';
import Splitter from '../../shared/components/UI/Splitter';

const ProductViewSection = props => {
  return (
    <>
      <h2 className="mb-3 text-lg font-semibold">{props.header}</h2>
      <div className="text-gray-600 text-sm leading-snug">{props.children}</div>
      <Splitter className="my-5" />
    </>
  );
}

export default ProductViewSection;