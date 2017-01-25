import React from 'react';
import { Route } from 'react-router';
import App from './ui/components/app';
import Page from './ui/components/page';
import Divisions from './ui/components/divisions';

export default (
  <Route path="/" component={App}>
      <Route path="divisions" component={Divisions}/>
      <Route path="page/:id" component={Page}/>
  </Route>
);
