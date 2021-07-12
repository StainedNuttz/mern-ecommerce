import React from 'react';

import Navigation from './Navigation';
import Logo from '../UI/Logo';

const NavLeft = props => {
  return (
    <Navigation className="space-x-6 text-lg" onClick={props.onClick} links={
      [
        { auth: null, text: <Logo className="no-underline" />, link: '/', nounderline: true},
        { auth: null, text: 'Featured', link: '/' },
        { auth: null, text: 'Explore', link: '/explore' },
      ]
    } />
  );
}

export default NavLeft;