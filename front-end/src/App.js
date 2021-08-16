import React, { useCallback, useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Header from './shared/components/Header/Header';
import Footer from './shared/components/Footer/Footer';

import Home from './home/pages/Home';
// import Profile from './profile/pages/Profile';
// import Signup from './authentication/pages/Signup';
// import Login from './authentication/pages/Login';
// import Explore from './explore/pages/Explore';
// import Cart from './cart/pages/Cart';
// import Product from './products/pages/Product';
// import Admin from './authentication/pages/Admin';

import { AuthContext } from './shared/context/auth-context';
import Checkout from './checkout/pages/Checkout';
import LoadingSpinner from './shared/components/UI/LoadingSpinner';

// lazy
// const Home = React.lazy(() => import('./home/pages/Home'));
const Signup = React.lazy(() => import('./authentication/pages/Signup'));
const Login = React.lazy(() => import('./authentication/pages/Login'));
const Explore = React.lazy(() => import('./explore/pages/Explore'));
const Cart = React.lazy(() => import('./cart/pages/Cart'));
const Product = React.lazy(() => import('./products/pages/Product'));
const Admin = React.lazy(() => import('./authentication/pages/Admin'));
const Profile = React.lazy(() => import('./profile/pages/Profile'));

// reference to JS timeout
let logoutTimer;

function App() {
  const [token, setToken] = useState(null);
  const [tokenExpiration, setTokenExpiration] = useState(null);
  const [userData, setUserData] = useState(null);

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/p/:productId" exact>
          <Product />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/explore" exact>
          <Explore />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/p/:productId" exact>
          <Product />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
    
  }

  const login = useCallback((userData, token, expiry) => {
    setUserData(userData);
    setToken(token);
   
    // save token + user data
    // will keep track of token expiration
    const tokenExpiry = expiry || new Date(Date.now() + 1000 * 60 * 60).toISOString();
    setTokenExpiration(tokenExpiry);
    localStorage.setItem('userData',
      JSON.stringify({ 
        userData,
        token,
        tokenExpiry
      })
    );
  }, []);

  const logout = useCallback(() => {
    setUserData(null);
    setToken(null);
    setTokenExpiration(null);
    localStorage.removeItem('userData');
  }, []);

  // check if should automatically login
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    // get stored token/user data
    // check if token exists + not expired
    if (storedData && storedData.token && new Date(storedData.tokenExpiry).getTime() > Date.now()) {
      // login if all true
      login(storedData.userData, storedData.token, storedData.tokenExpiry);
    }
  }, [login]);

  // check if should automatically logout
  useEffect(() => {
    if (token && tokenExpiration) {
      const remainingTime = new Date(tokenExpiration).getTime() - Date.now();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpiration]);

  // define routes
  return (
    <AuthContext.Provider value={{
      isLoggedIn: !!token,
      userData,
      token,
      login,
      logout
    }}>
      <Router>
        <Header />
        <main className="lg:container mx-auto px-2 my-3 relative">
          <Suspense
            fallback={
              <div className="flex justify-center">
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;