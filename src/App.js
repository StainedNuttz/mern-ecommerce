import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Header from './shared/components/Header/Header';
import Footer from './shared/components/Footer/Footer';

import Home from './home/pages/Home';
import Signup from './authentication/pages/Signup';
import Login from './authentication/pages/Login';
import Explore from './explore/pages/Explore';
import Cart from './cart/pages/Cart';
import Product from './products/pages/Product';

function App() {
  return (
    <Router>
      <Header />
      <main className="lg:container mx-auto px-2 my-3 relative">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/explore" exact>
            <Explore />
          </Route>
          <Route path="/:productShortName/:productId" exact>
            <Product />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;