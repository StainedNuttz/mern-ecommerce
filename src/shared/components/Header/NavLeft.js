import React from 'react';

import Navigation from './Navigation';
import Logo from '../UI/Logo';

const NavLeft = props => {
  return (
    <Navigation className="space-x-6 text-lg" onClick={props.onClick} links={
      [
        { text: <Logo className="no-underline" />, link: '/', nounderline: true},
        { text: 'Featured', link: '/' },
        { text: 'Explore', link: '/explore' },
      ]
    } />
  );
}

export default NavLeft;