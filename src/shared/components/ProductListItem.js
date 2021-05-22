import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import Card from './Card';

const ProductListItem = props => {
  let stock;
  if (props.stock > 0) {
    stock = <span className="text-green-600">{`${props.stock} in stock`}</span>
  } else {
    stock = <span className="text-red-600">Out of stock</span>
  }

  let link = `/${props.name.split(' ').join('-')}/${props.id}`

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
          <Link to={link}>
            <h2 id="name" className="text-gray-800 text-lg mt-0.5 hover:text-blue-600 line-clamp-2">
              {props.name}
            </h2>
          </Link>
        </div>
        <div className="flex flex-col mt-2">
          <h3 className="text-2xl font-semibold text-gray-900">{props.price}</h3>
          {stock}
          <Button text="Add to cart" />
        </div>
      </div>
    </Card>
  );
}

export default ProductListItem;