import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Latest from './pages/Latest';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/latest' component={Latest} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;