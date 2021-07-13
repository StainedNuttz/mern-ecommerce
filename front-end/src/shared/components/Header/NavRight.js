import React, { useContext } from 'react';

import { ShoppingCartIcon } from '@heroicons/react/solid'
import { AuthContext } from '../../context/auth-context';

import Navigation from './Navigation';

const NavRight = props => {  
  const auth = useContext(AuthContext);

  return (
    <Navigation className="space-x-6 text-lg" onClick={props.onClick} links={
      [
        { admin: true, text: 'Admin', link: '/admin' },
        { auth: false, text: 'Sign up', link: '/signup' },
        { auth: false, text: 'Log in', link: '/login' },
        { auth: true, text: 'Logout', onClick: auth.logout },
        { auth: null, text: <ShoppingCartIcon className="text-white w-7 mt-1 hover:text-blue-100" />, link: '/cart' },
      ]
    } />
  );
}

export default NavRight;