import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './home/pages/Home';

function App() {
  return (
    <Router>
      <div className="lg:container mx-auto px-2">
        <header>HEADER</header>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
        <footer>FOOTER</footer>
      </div>
    </Router>
  );
}

export default App;