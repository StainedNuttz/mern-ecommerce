import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Navigation from './Navigation';
import Logo from '../UI/Logo';

import './SideNav.css';

const SideNav = props => {
  return (
    <React.Fragment>
      <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
        <div className="bg-blue-700 text-white text-center text-xl font-light top-0 left-0 absolute z-30 h-screen w-1/2 py-4 flex flex-col space-y-3">
          <Navigation className="flex-col space-y-8" onClick={props.onClick} links={
            [
              { text: <Logo className="text-center"></Logo>, link: '/', nounderline: true },
              { text: 'Featured', link: '/' },
              { text: 'Explore', link: '/explore' },
              { text: 'Sign up', link: '/signup' },
              { text: 'Log in', link: '/login' },
            ]
          }/>
        </div>
      </CSSTransition>
    </React.Fragment>
  );
}

export default SideNav;