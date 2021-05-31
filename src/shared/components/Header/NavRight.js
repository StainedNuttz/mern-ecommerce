import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid'
import Navigation from './Navigation';

const NavRight = props => {
  return (
    <Navigation className="space-x-6 text-lg" onClick={props.onClick} links={
      [
        { text: 'Sign up', link: '/signup' },
        { text: 'Log in', link: '/login' },
        { text: <ShoppingCartIcon className="text-white w-7 mt-1 hover:text-blue-100" />, link: '/cart' },
      ]
    } />
  );
}

export default NavRight;