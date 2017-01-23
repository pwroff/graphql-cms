import React from 'react';
import { Route } from 'react-router';
import App from './ui/components/app';
import Page from './ui/components/page';
import Division from './ui/components/division';

export default (
  <Route path="/" component={App}>
      <Route path="division/:id" component={Division}/>
      <Route path="page/:id" component={Page}/>
  </Route>
);
