import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../incidents/styles/main';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from 'react-apollo';

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

const App = () => (
  <ApolloProvider client={client}>
    <div className="container-md px-3">
      <h2 className="f1-light border-bottom mb-4">Service Status</h2>
      <div className="Box Box-body mb-3">
        <div className="d-flex flex-justify-between">
          <div>Webhooks</div>
          <div>Operational</div>
        </div>
      </div>
      <div className="Box Box-body Box--danger text-red">
        <div className="d-flex flex-justify-between">
          <div>Web UI</div>
          <div>Impacted</div>
        </div>
      </div>
    </div>
  </ApolloProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  );
});
