import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Header from './shared/components/Header/Header';
import Footer from './shared/components/Footer/Footer';

import Home from './home/pages/Home';
import Signup from './authentication/pages/Signup';
import Login from './authentication/pages/Login';
import Explore from './explore/pages/Explore';
import Cart from './cart/pages/Cart';
import Product from './products/pages/Product';

import { AuthContext } from './shared/context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  }, []);

  // define routes
  let routes;

  if (isLoggedIn) {
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
        <Route path="/p/:productId" exact>
          <Product />
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
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/p/:productId" exact>
          <Product />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn, isAdmin, setIsAdmin, login, logout
    }}>
      <Router>
        <Header />
        <main className="lg:container mx-auto px-2 my-3 relative">
          {routes}
        </main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;