import React, { useContext } from 'react';

import { ShoppingCartIcon } from '@heroicons/react/solid'
import { AuthContext } from '../../context/auth-context';

import Navigation from './Navigation';

const NavRight = props => {  
  const auth = useContext(AuthContext);

  return (
    <Navigation className="space-x-6 text-lg" links={
      [
        { admin: true, text: 'Admin', link: '/admin' },
        { auth: false, text: 'Sign up', link: '/signup' },
        { auth: false, text: 'Log in', link: '/login' },
        { auth: true, text: (auth.userData && auth.userData.username || 'null'), link: '/profile/about' },
        { auth: true, style: 'bg-red-500 hover:bg-red-400 p-2', text: 'Logout', onClick: auth.logout },
        { auth: null, text: <ShoppingCartIcon className="text-white w-7 mt-1 hover:text-blue-100" />, link: '/cart' },
      ]
    } />
  );
}

export default NavRight;