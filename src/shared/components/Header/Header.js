import React, { useState } from 'react';

import { ShoppingCartIcon } from '@heroicons/react/solid';

import NavLeft from './NavLeft';
import NavRight from './NavRight';
import Navigation from './Navigation';
import Hamburger from './Hamburger';
import SideNav from './SideNav';
import Backdrop from '../UI/Backdrop';

const Header = props => {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const closeSideNav = () => setSideNavIsOpen(false);
  const openSideNav = () => setSideNavIsOpen(true);

  const resizeCallback = () => {
    if (window.innerWidth >= 640 && sideNavIsOpen) { closeSideNav() }
  }
  window.addEventListener('resize', resizeCallback);
  window.addEventListener('orientationchange', resizeCallback);

  return (
    <React.Fragment>
      {/* Side nav */}
      { sideNavIsOpen && <Backdrop onClick={closeSideNav} /> }
      <SideNav onClick={closeSideNav} show={sideNavIsOpen} />

      {/* Main header */}
      <header className={`text-white bg-blue-700 ${props.className} relative z-10`}>
        <div className="lg:container mx-auto py-5 px-2">

          {/* MOBILE */}
          <div className="flex sm:hidden justify-between items-center px-3">
            <Hamburger onClick={openSideNav} />
            <Navigation links={[
              { text: <ShoppingCartIcon className="text-white w-7 mt-1 hover:text-blue-100" />, link: '/cart' },
            ]} />
          </div>

          {/* NON-MOBILE */}
          <div className="hidden sm:flex sm:items-center sm:justify-between">
            <NavLeft />
            <NavRight />
          </div>

        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;