import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Main from './pages/Main';
import Brand from './pages/Brand';


const Router = () => {
  return (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route exact path='/brand' component={Brand} />
  </Switch>
  );
}

export default Router;