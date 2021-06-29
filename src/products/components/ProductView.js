import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Form from '../../shared/components/Forms/Form';

import Splitter from '../../shared/components/UI/Splitter';
import Card from '../../shared/components/UI/Card';
import Button from '../../shared/components/UI/Button';
import Info from '../../shared/components/UI/Info';

import Input from '../../shared/components/Forms/Input';
import { VALIDATE_MIN, VALIDATE_MAX, VALIDATE_REQUIRED } from '../../shared/utils/validations';

import ReviewList from './ReviewList';
import ProductViewSection from './ProductViewSection';
import Pagination from './Pagination';

import { Icon } from '@iconify/react';
import paypal from '@iconify-icons/logos/paypal';
import visa from '@iconify-icons/cib/cc-visa';
import mastercard from '@iconify-icons/grommet-icons/mastercard';
import applePay from '@iconify-icons/logos/apple-pay';
import { TruckIcon } from '@heroicons/react/solid';
import { CashIcon } from '@heroicons/react/solid';

const ProductView = props => {
  const { name, image, brand, price, stock, reviews, rating } = props.product;
  const desc = <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /><br />Deserunt at id accusantium neque quo, quam maiores eius molestias cumque laboriosam corrupti eos nisi fugiat quia. Laudantium sapiente eos commodi cupiditate. Sint libero iure quia modi, commodi ratione tempore quod aliquid distinctio ipsam. Ad autem repudiandae asperiores non facere, odit inventore adipisci, velit saepe voluptatibus cum!<br /><br /> Hic autem vitae suscipit reprehenderit reiciendis. Rerum, magnam commodi porro error dignissimos nam quos explicabo aliquid ipsam asperiores voluptatum exercitationem magni eos dolor sed.</p>
  const delivery = <p>Delivers to the United Kingdom.</p>
  const policy = <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt at id accusantium neque quo, quam maiores eius molestias cumque laboriosam corrupti eos nisi fugiat quia. Laudantium sapiente eos commodi cupiditate. Sint libero iure quia modi, commodi ratione tempore quod aliquid distinctio ipsam. Ad autem repudiandae asperiores non facere, odit inventore adipisci</p>

  const paginationRef = useRef(null);
  const reviewsRef = useRef(null);
  const writeReviewRef = useRef(null);
  
  let date = new Date();
  date.setDate(date.getDate() + 3);
  date = date.toDateString().split(' ');
  date.pop();
  date = date.join(' ');
  
  let _stock;
  if (stock > 0) {
    _stock = <p className="text-green-600">{`${stock} in stock`}</p>
  } else {
    _stock = <p className="text-red-600">Out of stock</p>
  }

  const dummyReviews = [
    { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
    { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
    { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies a ist total' },
    { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
    { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
    { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
    { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies Zeug ist total' },
    { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
    { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
    { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
    { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies Zeug ist total' },
    { rating: 1, author: 'Josef Wimmer', title: 'I lol, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
    { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
    { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
    { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies Zeug ist total' },
    { rating: 1, author: 'Josef Wimmer', title: 'I lol, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
    { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
    { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
    { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies Zeug ist total' },
    { rating: 1, author: 'Josef Wimmer', title: 'I d, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
    { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
    { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
    { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies Zeug ist total' },
    { rating: 1, author: 'Josef Wimmer', title: 'I d, dass ich ein Refund bekommen kann', text: 'fsjfkldsjflasjgarejgiarjugrgharjglhgakfdfdfgdfuhgurhfueahfuh djs djsad a   a dwj djw wcicicj kik sdj jawhda whd ah . I hob das gkoft und es war kaputt... ich brauche hilfe, i hab gtreffen' },
    { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
    { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
    { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies Zeug ist total' },
    { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
    { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
    { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
    { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies Zeug ist total' },
    { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
    { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
    { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
    { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies Zeug ist total' },
    { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
    { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
    { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
    { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies Zeug ist total' },
    { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
    { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
    { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
    { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies Zeug ist total' },
    { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
    { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
    { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
    { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies Zeug ist total' },
    { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
    { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
    { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
    { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies Zeug ist total' },
    { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
    { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
    { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
    { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies Zeug ist total' },
  ];

  // paginations
  const [currentPageValues, setCurrentPageValues] = useState([]);

  const onPageInit = p => {
    setCurrentPageValues(p);
  }

  const onPageChange = p => {
    setCurrentPageValues(p);
    reviewsRef.current.style.height = window.getComputedStyle(reviewsRef.current, null).getPropertyValue('height');
    writeReviewRef.current.scrollIntoView({behavior: 'smooth'});
  }

  const inputs = [
    {
      id: 'write-review',
      data: {
        type: 'textarea',
        placeholder: 'Write a review',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in a review before submitting',
          [VALIDATE_MIN]: { errorMsg: 'Your review must be at least 5 characters long', params: 5 },
          [VALIDATE_MAX]: { errorMsg: 'lol your cock is too long', params: 10 }
        }
      }
    }
  ]

  return (
    <div className="grid md:grid-cols-3 px-1 gap-2">
      {/* PRODUCT */}
      <Card className="p-6 py-5 md:col-span-2 md:row-span-1" style={{maxWidth: '32rem'}}>
        <Link to={'/'} className="text-xs block text-left text-gray-700 hover:text-blue-600">{brand}</Link>
        <h2 className="text-left text-gray-800 pr-5">
          {name}
        </h2>
        <div className="text-yellow-600 text-xs text-left mt-1">
          <span className="">{rating} / 5</span> <Link to={`#reviews`}><span className="text-black hover:text-blue-800">({reviews} reviews)</span></Link>
        </div>
        <Splitter className="mt-4 mb-5" />
        <img className="mx-auto max-h-64" src={image} alt={name} />
      </Card>

      {/* INFO */}
      <Card className="text-left p-5 md:row-span-5 md:mb-4">
        <div className="">
          <div className="flex md:flex-col gap-y-3 md:items-start lg:flex-row justify-between items-center">
            <div>
              <p className="text-3xl font-semibold">{price}</p>
              <div className="text-base font-normal">{_stock}</div>
            </div>
            <div className="self-start mt-1">
              <Button disabled={stock === 0} className="p-2 px-6">Add to cart</Button>
            </div>
          </div>
          <div className="flex flex-col col-span-2 space-y-1 mt-4">
            <div className="flex items-center space-x-2">
              <TruckIcon className="w-7 text-blue-600" />
              <p className="text-sm">Delivery by <span className="font-bold ml-0.5 text-green-600">{date}</span></p>
            </div>
            <div className="flex items-center space-x-2">
              <CashIcon className="w-7 text-blue-600" />
              <p className="text-sm">30-day Money Back Guarantee</p>
            </div>
          </div>
        </div>
        <Splitter className="mt-3 mb-4" />
        <ProductViewSection header="Description">{desc}</ProductViewSection>
        <ProductViewSection header="Delivery">{delivery}</ProductViewSection>
        <ProductViewSection header="Payment">
          <p>We accept the following payment methods:</p>
          <div className="flex items-center space-x-3 text-3xl mt-2 -mb-2">
            <Icon icon={paypal} />
            <Icon icon={mastercard} className="text-5xl" />
            <Icon icon={visa} className="text-blue-700" />
            <Icon icon={applePay} />
          </div>
        </ProductViewSection>
        <ProductViewSection header="Our policy">{policy}</ProductViewSection>
      </Card>

      {/* WRITE REVIEW */}
      <Card ref={writeReviewRef} className="p-3 md:col-span-2 text-left">
        {currentPageValues.length > 0 ? 
         <>
            <Info color="yellow">
              You purchased this item on <span className="font-semibold">Jun 14</span>
            </Info>
            <Form initialFormInputs={inputs} onSubmit={() => console.log('submit')} />
         </> :
          <p>No reviews! Why don't you write one?</p>}
          
      </Card>

      {/* REVIEWS */}
      {/* hooking this up is simple */}
      {/* 1. hook in array of data from back-end (in this case, reviews) */}
      {/* 2. choose perPage and a callback to change this components state to sync with pagination */}
      <Card ref={reviewsRef} className="p-5 text-left md:col-span-2 relative">
        <div className="pb-4">
          <h3 className="text-2xl font-semibold">Reviews</h3>
          <p className="text-sm">There are <span className="font-semibold">{reviews}</span> written reviews for this product</p>
        </div>
        <ReviewList reviews={currentPageValues} />
        <Splitter className="mt-4 mb-12" />
        <div className="absolute bottom-3 left-5" ref={paginationRef}>
          <Pagination
            array={dummyReviews}
            perPage={8}
            onPageChange={onPageChange}
            onInitPage={onPageInit}
          />
        </div>
      </Card>
      {/* <Card className="md:col-span-2 p-2 flex"> */}
      {/* </Card> */}
    </div>
  );
}

export default ProductView;