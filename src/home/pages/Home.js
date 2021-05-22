import React from 'react';
import ProductList from '../../shared/components/ProductList'

import image from '../../home/pages/iphone12.jpeg';
import image2 from '../../home/pages/chainsaw.jpg';
import image3 from '../../home/pages/shoe.jpg';
import image4 from '../../home/pages/beer.jpg';
// this page gets featured/trending products
// each Product links to a ProductView, which shows the deeper details of the product
const Home = props => {
  // this array would come from the back end
  const PRODUCTS = [
    {
      id: 'p1',
      name: 'iPhone 13 SE, 256GB',
      image: image,
      price: '£599.00',
      stock: 0,
      reviews: 968,
      rating: 4.5
    },
    {
      id: 'p2',
      name: 'RYOBI Chainsaw Ultra X',
      image: image2,
      price: '£149.99',
      stock: 32,
      reviews: 342,
      rating: 4.5
    },
    {
      id: 'p3',
      name: 'Birkenstock Arizona Birko Flor Navy Sandals',
      image: image3,
      price: '£52.17',
      stock: 12,
      reviews: 29,
      rating: 5
    },
    {
      id: 'p4',
      name: 'Paulaner Hefe-Weizen Natural Wheat Beer, 500 ml',
      image: image4,
      price: '£2.60',
      stock: 832,
      reviews: 179,
      rating: 5
    },
    {
      id: 'p4',
      name: 'Paulaner Hefe-Weizen Natural Wheat Beer, 500 ml',
      image: image4,
      price: '£2.60',
      stock: 832,
      reviews: 179,
      rating: 5
    },
    {
      id: 'p4',
      name: 'Paulaner Hefe-Weizen Natural Wheat Beer, 500 ml',
      image: image4,
      price: '£2.60',
      stock: 832,
      reviews: 179,
      rating: 5
    },
    {
      id: 'p4',
      name: 'Paulaner Hefe-Weizen Natural Wheat Beer, 500 ml',
      image: image4,
      price: '£2.60',
      stock: 832,
      reviews: 179,
      rating: 5
    },
    {
      id: 'p4',
      name: 'Paulaner Hefe-Weizen Natural Wheat Beer, 500 ml',
      image: image4,
      price: '£2.60',
      stock: 832,
      reviews: 179,
      rating: 5
    },
    {
      id: 'p4',
      name: 'Paulaner Hefe-Weizen Natural Wheat Beer, 500 ml',
      image: image4,
      price: '£2.60',
      stock: 832,
      reviews: 179,
      rating: 5
    },
    {
      id: 'p4',
      name: 'Paulaner Hefe-Weizen Natural Wheat Beer, 500 ml',
      image: image4,
      price: '£2.60',
      stock: 832,
      reviews: 179,
      rating: 5
    },
    {
      id: 'p4',
      name: 'Paulaner Hefe-Weizen Natural Wheat Beer, 500 ml',
      image: image4,
      price: '£2.60',
      stock: 832,
      reviews: 179,
      rating: 5
    },
    {
      id: 'p4',
      name: 'Paulaner Hefe-Weizen Natural Wheat Beer, 500 ml',
      image: image4,
      price: '£2.60',
      stock: 832,
      reviews: 179,
      rating: 5
    },
    {
      id: 'p4',
      name: 'Paulaner Hefe-Weizen Natural Wheat Beer, 500 ml',
      image: image4,
      price: '£2.60',
      stock: 832,
      reviews: 179,
      rating: 5
    },
    {
      id: 'p4',
      name: 'Paulaner Hefe-Weizen Natural Wheat Beer, 500 ml',
      image: image4,
      price: '£2.60',
      stock: 832,
      reviews: 179,
      rating: 5
    },
    {
      id: 'p4',
      name: 'Paulaner Hefe-Weizen Natural Wheat Beer, 500 mlPaulaner Hefe-Weizen Natural Wheat Beer, 500 ml',
      image: image4,
      price: '£2.60',
      stock: 832,
      reviews: 179,
      rating: 5
    },
    {
      id: 'p4',
      name: 'Paulaner Hefe-Weizen Natural Wheat Beer, 500 ml',
      image: image4,
      price: '£2.60',
      stock: 832,
      reviews: 179,
      rating: 5
    },
  ];

  return (
    <ProductList products={PRODUCTS} />
  );
}

export default Home;