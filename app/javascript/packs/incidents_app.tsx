import React from 'react';
import ReactDOM from 'react-dom';
import '../incidents/styles/main';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from 'react-apollo';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: '/graphql',
      credentials: 'same-origin',
    }),
  ]),
  cache: new InMemoryCache(),
});

const HomeRoute = Loadable({
  loader: () => import('../incidents/Home'),
  loading: () => <div>Loading...</div>,
});

const IncidentRoute = Loadable({
  loader: () => import('../incidents/Incident'),
  loading: () => <div>Loading...</div>,
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="py-4">
        <Route path="/" exact component={HomeRoute} />
        <Route path="/incidents/:id" component={IncidentRoute} />
      </div>
    </Router>
  </ApolloProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  );
});
