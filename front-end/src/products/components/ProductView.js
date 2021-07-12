import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Form from '../../shared/components/Forms/Form';
import { useForm } from '../../shared/hooks/useForm';

import Splitter from '../../shared/components/UI/Splitter';
import Card from '../../shared/components/UI/Card';
import Button from '../../shared/components/UI/Button';
import Info from '../../shared/components/UI/Info';

import { VALIDATE_MIN, VALIDATE_MAX, VALIDATE_REQUIRED } from '../../shared/utils/validations';

import ReviewList from './ReviewList';
import ProductViewSection from './ProductViewSection';
import Pagination from './Pagination';

import image4 from '../../home/pages/beer.jpg';

import { Icon } from '@iconify/react';
import paypal from '@iconify-icons/logos/paypal';
import visa from '@iconify-icons/cib/cc-visa';
import mastercard from '@iconify-icons/grommet-icons/mastercard';
import applePay from '@iconify-icons/logos/apple-pay';
import { TruckIcon } from '@heroicons/react/solid';
import { CashIcon } from '@heroicons/react/solid';
import { useHttp } from '../../shared/hooks/useHttp';

const general = {
  "desc": <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /><br />Deserunt at id accusantium neque quo, quam maiores eius molestias cumque laboriosam corrupti eos nisi fugiat quia. Laudantium sapiente eos commodi cupiditate. Sint libero iure quia modi, commodi ratione tempore quod aliquid distinctio ipsam. Ad autem repudiandae asperiores non facere, odit inventore adipisci, velit saepe voluptatibus cum!<br /><br /> Hic autem vitae suscipit reprehenderit reiciendis. Rerum, magnam commodi porro error dignissimos nam quos explicabo aliquid ipsam asperiores voluptatum exercitationem magni eos dolor sed.</p>,

  "delivery": <p>Delivers to the United Kingdom.</p>,

  "policy": <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt at id accusantium neque quo, quam maiores eius molestias cumque laboriosam corrupti eos nisi fugiat quia. Laudantium sapiente eos commodi cupiditate. Sint libero iure quia modi, commodi ratione tempore quod aliquid distinctio ipsam. Ad autem repudiandae asperiores non facere, odit inventore adipisci</p>
}

const ProductView = props => {
  const { name, image, brand, price, stock, reviews, rating } = props.product;
  console.log('wtf', reviews)
  
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

  // paginations
  const [currentPageValues, setCurrentPageValues] = useState(reviews);

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
      id: 'review-title',
      data: {
        type: 'text',
        placeholder: 'Title',
        validityRules: {
          [VALIDATE_REQUIRED]: 'A title is required',
          [VALIDATE_MAX]: 'Your title must contain no more than 30 characters'
        }
      }
    },
    {
      id: 'review-text',
      data: {
        type: 'textarea',
        placeholder: 'Write a review',
        validityRules: {
          [VALIDATE_REQUIRED]: 'Please enter in a review before submitting',
          [VALIDATE_MIN]: { errorMsg: 'Your review must contain at least 5 characters', params: 5 },
          [VALIDATE_MAX]: { errorMsg: 'Your review must contain less than 300 characters', params: 300 }
        }
      }
    }
  ]

  const [isLoading, error, sendRequest] = useHttp();

  const id = useParams().productId;
  const submitReviewHandler = async () => {
    try {
      await sendRequest(
        `/api/products/${id}/review`,
        'POST',
        JSON.stringify({
          title: formState.inputs['review-title'].value,
          text: formState.inputs['review-text'].value,
          rating: 5,
          user: '60e9ec0fd465865da3ead4b6',
          date: new Date()
        }),
        {'Content-Type': 'application/json' }
      );
    } catch (err) {

    }
  }

  const [formState, changeHandler, submitHandler] = 
  useForm(inputs, { isValid: false }, submitReviewHandler);

  return (
    <div className="grid md:grid-cols-3 px-1 gap-2">
      {/* PRODUCT */}
      <Card className="p-6 py-5 md:col-span-2 md:row-span-1" style={{maxWidth: '32rem'}}>
        <Link to={'/'} className="text-xs block text-left text-gray-700 hover:text-blue-600">{brand}</Link>
        <h2 className="text-left text-gray-800 pr-5">
          {name}
        </h2>
        <div className="text-yellow-600 text-xs text-left mt-1">
          <span className="">{rating} / 5</span> <Link to={`#reviews`}><span className="text-black hover:text-blue-800">({reviews.length} reviews)</span></Link>
        </div>
        <Splitter className="mt-4 mb-5" />
        <img className="mx-auto max-h-64" src={image4} alt={name} />
      </Card>

      {/* INFO */}
      <Card className="text-left p-5 md:row-span-5 md:mb-4">
        <div className="">
          <div className="flex md:flex-col gap-y-3 md:items-start lg:flex-row justify-between items-center">
            <div>
              <p className="text-3xl font-semibold">{`£${price.toFixed(2)}`}</p>
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
        <ProductViewSection header="Description">{general.desc}</ProductViewSection>
        <ProductViewSection header="Delivery">{general.delivery}</ProductViewSection>
        <ProductViewSection header="Payment">
          <p>We accept the following payment methods:</p>
          <div className="flex items-center space-x-3 text-3xl mt-2 -mb-2">
            <Icon icon={paypal} />
            <Icon icon={mastercard} className="text-5xl" />
            <Icon icon={visa} className="text-blue-700" />
            <Icon icon={applePay} />
          </div>
        </ProductViewSection>
        <ProductViewSection header="Our policy">{general.policy}</ProductViewSection>
      </Card>

      {/* WRITE REVIEW */}
      <Card ref={writeReviewRef} className="p-3 md:col-span-2 text-left">
         <>
            <Info color="yellow">
              You purchased this item on <span className="font-semibold">Jun 14</span>
            </Info>
            <Form
              className="relative"
              btnText="Submit"
              isLoading={isLoading}
              error={error}
              formState={formState}
              submitHandler={submitHandler}
              changeHandler={changeHandler}
              inputs={inputs}
            />
          </>
      </Card>

      {/* REVIEWS */}
      {/* hooking this up is simple */}
      {/* 1. hook in array of data from back-end (in this case, reviews) */}
      {/* 2. choose perPage and a callback to change this components state to sync with pagination */}
      <Card ref={reviewsRef} className="p-5 text-left md:col-span-2 relative">
        <div className="pb-4">
          <h3 className="text-2xl font-semibold">Reviews</h3>
          <p className="text-sm">There are <span className="font-semibold">{reviews.length}</span> written reviews for this product</p>
        </div>
        <ReviewList reviews={reviews} />
        <Splitter className="mt-4 mb-12" />
        <div className="absolute bottom-3 left-5" ref={paginationRef}>
           {/* TODO: CREATE HOOK!!!!!!!!!!!!!!! */}
          {/* <Pagination
            array={reviews}
            perPage={5}
            onPageChange={onPageChange}
            onInitPage={onPageInit}
          /> */}
        </div>
      </Card>
    </div>
  );
}

export default ProductView;