import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Profile} />
  </Switch>
);

export default Routes;
