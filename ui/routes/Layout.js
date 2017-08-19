import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import routes from './index';

const Layout = () => (
  <div>
    <Switch>
      {routes.map(route => <Route key={`route-${route.name}`} {...route} />)}
    </Switch>
  </div>
);

export default withRouter(Layout);
