import React from 'react';

const Logo = props => {
  return <h1 className={`hover:text-blue-100 font-bold text-2xl sm:text-3xl text-left ${props.className}`}>eCommerce!</h1>
}

export default Logo;