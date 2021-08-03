import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';

import NavigationLink from './NavigationLink';

const Navigation = props => {
  const auth = useContext(AuthContext)
  return (
    <nav>
      <ul className={`flex items-center ${props.className}`}>
        {
          props.links.map(l => {
            return (
              (
                (l.admin && auth.userData && auth.userData.isAdmin) ||
                (l.auth === null) ||
                (l.auth === true && auth.isLoggedIn) ||
                (l.auth === false && !auth.isLoggedIn)
              ) &&
              <NavigationLink
                key={Math.random()}
                onClick={props.onClick || l.onClick}
                text={l.text}
                link={l.link}
                nounderline={l.nounderline}
              />
            );
          })
       }
      </ul>
    </nav>
  );
}

export default Navigation;