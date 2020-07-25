import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
  ApolloProvider,
} from '@apollo/client';

const link = new HttpLink({
  uri: 'https://parseapi.back4app.com/graphql',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'X-Parse-Application-Id': 'jiWDv3feQgxFkIMAODyMEFacC6N7hINUFkiA3lEW',
      'X-Parse-Master-Key': 'qtDUIV11EPFKiUYoAbvmw5IcQzZtm5p7XfiVa7Oj',
      'X-Parse-Client-Key': 'qm7o1AVRldX7sIrVlW6VfjQEmou5u5VCRjpFg5k7',
      'X-Parse-Session-Token': localStorage.getItem('sessionToken') || null,
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, link),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,

  document.getElementById('root')
);
