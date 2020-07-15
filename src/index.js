import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://parseapi.back4app.com/graphql',
  headers: {
    'X-Parse-Application-Id': 'jiWDv3feQgxFkIMAODyMEFacC6N7hINUFkiA3lEW',
    'X-Parse-REST-API-Key': 'xCt8Mm0CmE0xiopZN8hEXIVWOLUxyDdo0a66Agt7',
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,

  document.getElementById('root')
);
