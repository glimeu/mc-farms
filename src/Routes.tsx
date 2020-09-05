import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Latest from './pages/Latest';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/latest' component={Latest} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;