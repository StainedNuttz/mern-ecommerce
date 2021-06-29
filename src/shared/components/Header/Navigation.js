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
            console.log(l.onClick)
            let condition;
            if (l.auth === true) {
              condition = auth.isLoggedIn;
            } else if (l.auth === false) {
              condition = !auth.isLoggedIn;
            } else {
              condition = true;
            }

            return (
              condition &&
              <NavigationLink
                key={Math.random()}
                onClick={l.onClick}
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