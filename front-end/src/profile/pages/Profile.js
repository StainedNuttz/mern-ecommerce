import React, { useContext, useState } from 'react';

import { AuthContext } from '../../shared/context/auth-context';
import { useRefresh } from '../../shared/hooks/useRefresh';

import Button from '../../shared/components/UI/Button';

import ProfileOrders from '../components/ProfileOrders';
import ProfileAbout from '../components/ProfileAbout';
import ProfileSettings from '../components/ProfileSettings';
import { Route, Switch, useRouteMatch } from 'react-router';

const Profile = props => {
  const auth = useContext(AuthContext);
  const [activePage, setActivePage] = useState('about');
  const [singleOrder, setSingleOrder] = useState(null);
  
  const { path, url } = useRouteMatch();

  return (
    <div className="my-5">
      <nav className="mb-6">
        <ul className="space-x-2">
          <Button
            to={`${url}/about`}
            onClick={() => setActivePage('about')}
            className={activePage === 'about' && '!bg-blue-300 hover:bg-blue-300'}>
              My profile
          </Button>
          <Button
            to={`${url}/orders`}
            onClick={() => {
              setActivePage('orders');
              setSingleOrder(null);
            }}
            className={activePage === 'orders' && '!bg-blue-300 hover:bg-blue-300'}>
              My orders
          </Button>
          <Button
            to={`${url}/settings`}
            onClick={() => setActivePage('settings')}
            className={activePage === 'settings' && '!bg-blue-300 hover:bg-blue-300'}>
              Settings
          </Button>
        </ul>
      </nav>

      <Switch>
        <Route path={`${path}/about`}>
          <ProfileAbout />
        </Route>
        <Route path={`${path}/orders`}>
          <ProfileOrders singleOrder={{ singleOrder, setSingleOrder }} />
        </Route>
        <Route path={`${path}/settings`}>
          <ProfileSettings />
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;