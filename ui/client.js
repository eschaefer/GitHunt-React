import React from 'react';
import * as ReactGA from 'react-ga';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { ApolloProvider } from 'react-apollo';

// Polyfill fetch
import 'isomorphic-fetch';
import './style/index.css';

import createApolloClient from './helpers/create-apollo-client';
import { getHybridOrFullNetworkInterface } from './transport';
import Layout from './routes/Layout';

const client = createApolloClient({
  networkInterface: getHybridOrFullNetworkInterface(),
  initialState: window.__APOLLO_STATE__, // eslint-disable-line no-underscore-dangle
  ssrForceFetchDelay: 100,
  connectToDevTools: true,
});

// Initialize Analytics
ReactGA.initialize('UA-74643563-4');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);

  return null;
}

render((
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div>
        <Route path="/" component={logPageView} />
        <Layout />
      </div>
    </BrowserRouter>
  </ApolloProvider>
), document.getElementById('content'));
