import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';

import Navigation from './Navigation';
import Logo from '../UI/Logo';
import { AuthContext } from '../../context/auth-context';

import './SideNav.css';

const SideNav = props => {
  const auth = useContext(AuthContext);
  return (
    <React.Fragment>
      <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
        <div className="bg-blue-700 text-white text-center text-xl font-light top-0 left-0 absolute z-30 h-screen w-1/2 py-4 flex flex-col space-y-3">
          <Navigation className="flex-col space-y-8" navClick={props.navClick} mobile links={
            [
              { auth: null, text: <Logo className="text-center"></Logo>, link: '/', nounderline: true },
              { auth: true, text: (auth.userData && auth.userData.username), onClick: null },
              { auth: true, text: 'Logout', onClick: auth.logout, style: 'mb-4' },
              { auth: null, text: 'Featured', link: '/' },
              { auth: null, text: 'Explore', link: '/explore' },
              { auth: false, text: 'Sign up', link: '/signup' },
              { auth: false, text: 'Log in', link: '/login' },
              { admin: true, text: 'Admin', link: '/admin' }
            ]
          }/>
        </div>
      </CSSTransition>
    </React.Fragment>
  );
}

export default SideNav;