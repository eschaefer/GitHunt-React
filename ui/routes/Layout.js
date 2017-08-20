import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import routes from './index';

let ReactGA = {};

if (process.browser) {
  ReactGA = require('react-ga'); //eslint-disable-line

  // Initialize Analytics
  ReactGA.initialize('UA-74643563-4');
}

function logPageView() {
  if (process.browser) {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  return null;
}

const Layout = () => (
  <div>
    <Route path="/" component={logPageView} />
    <Switch>
      {routes.map(route => <Route key={`route-${route.name}`} {...route} />)}
    </Switch>
  </div>
);

export default withRouter(Layout);
