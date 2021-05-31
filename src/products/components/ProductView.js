import React from 'react';
import { Link } from 'react-router-dom'

import Splitter from '../../shared/components/UI/Splitter';
import Card from '../../shared/components/UI/Card';
import Button from '../../shared/components/UI/Button';
import ReviewList from './ReviewList';

const ProductView = props => {
  const { name, image, brand, price, stock, reviews, rating } = props.product;
  const desc = <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/><br/>Deserunt at id accusantium neque quo, quam maiores eius molestias cumque laboriosam corrupti eos nisi fugiat quia? Laudantium sapiente eos commodi cupiditate. Sint libero iure quia modi, commodi ratione tempore quod aliquid distinctio ipsam? Ad autem repudiandae asperiores non facere, odit inventore adipisci, velit saepe voluptatibus cum!<br/><br/> Hic autem vitae suscipit reprehenderit reiciendis. Rerum, magnam commodi porro error dignissimos nam quos explicabo aliquid ipsam asperiores voluptatum exercitationem magni eos dolor sed? Repellendus!</p>;

  let _stock;
  if (stock > 0) {
    _stock = <p className="text-green-600">{`${stock} in stock`}</p>
  } else {
    _stock = <p className="text-red-600">Out of stock</p>
  }

  return (
    <div className="grid md:grid-cols-2 px-1 gap-2">
      <Card className="p-6 py-5" style={{maxWidth: '32rem'}}>
        <Link className="text-xs block text-left text-gray-700 hover:text-blue-600">{brand}</Link>
        <h2 className="text-left font-semibold text-gray-800 pr-5">
          {name}
        </h2>
        <div className="text-yellow-600 text-xs text-left mt-1">
          <span className="">{rating} / 5</span> <Link to={`#reviews`}><span className="text-black hover:text-blue-800">({reviews} reviews)</span></Link>
        </div>
        <Splitter className="mt-4 mb-5" />
        <img className="mx-auto max-h-64" src={image} />
      </Card>
      <Card className="text-left p-5 md:order-1">
        <div className="grid grid-cols-2 md:grid-cols-1">
          <div>
            <p className="text-2xl font-semibold">{price}</p>
            <div className="text-base font-normal">{_stock}</div>
          </div>
          <Button disabled={stock === 0} className="self-center md:mt-3 md:px-12 md:justify-self-start rounded-lg font-normal text-lg p-2">Add to cart</Button>
        </div>
        <Splitter className="mt-3 mb-4" />
        <div className="col-span-2 text-gray-600 text-sm leading-snug">{desc}</div>
      </Card>
      <Card id="reviews" className="text-left md:row-span-2 p-5">
        <h3 className="text-2xl font-semibold pb-4">Reviews</h3>
        <ReviewList reviews={[
          { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
          { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
          { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
          { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
          { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
          { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
          { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
          { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
          { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
          { rating: 1, author: 'Josef Wimmer', title: 'I hoffe, dass ich ein Refund bekommen kann', text: 'Schlecht. I hob das gkoft und es war kaputt...' },
          { rating: 4, author: 'Sandra Wimmer', title: 'i lieb des', text: 'zu teuer aber gut' },
          { rating: 4, author: 'Andrea Reitmaier', title: 'Super!', text: 'Stell dir vor, dass du Gay bist. Das ist wie dies Zeug.' },
          { rating: 5, author: 'Finn Luca', title: 'i wunsche, dass i ein Cock haben', text: 'dies Zeug ist total' },
        ]} />
      </Card>
    </div>
  );
}

export default ProductView;