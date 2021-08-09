import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAlert } from '../../shared/hooks/useAlert';

import Button from '../../shared/components/UI/Button';
import Card from '../../shared/components/UI/Card';
import Alert from '../../shared/components/UI/Alert';
import AddToCart from './AddToCart';

const ProductListItem = props => {
  let stock;
  if (props.stock > 0) {
    stock = <span className="text-green-600">{`${props.stock} in stock`}</span>
  } else {
    stock = <span className="text-red-600">Out of stock</span>
  }
  
  // let short = props.name.split(/[\s,]+/).join('-').toLowerCase();
  // let link = `${short}/${props.id}`;
  let link = `p/${props.id}`;

  return (
    <Card className="grid grid-cols-5 grid-rows-1 xl:grid-cols-1">
      <Link to={link} className="px-2 xl:py-4 col-span-2 flex items-center justify-center">
        <img className="max-h-48" src={props.image} alt={props.name}></img>
      </Link>
      <div className="col-span-3 flex flex-col justify-between p-3">
        <div className="h-20">
          <div className="text-yellow-600 text-xs">
            <span className="">{props.rating} / 5</span> <Link to={`${link}#reviews`}><span className="text-black hover:text-blue-800">({props.reviews} reviews)</span></Link>
          </div>
          <Link to={link} className="mt-2 text-xs text-gray-700 hover:text-blue-600">{props.brand}</Link>
          <Link id="name" className="text-gray-800 leading-6 text-lg hover:text-blue-600" to={link}>
            <p className="line-clamp-3">
              {props.name}
            </p>
          </Link>
        </div>
        <div className="flex flex-col mt-8">
          <h3 className="text-2xl font-semibold text-gray-900">£{props.price.toFixed(2)}</h3>
          {stock}
          <AddToCart data={
            {
              id: props.id,
              name: props.name,
              price: props.price,
              stock: props.stock
            }
          } />
        </div>
      </div>
    </Card>
  );
}

export default ProductListItem;