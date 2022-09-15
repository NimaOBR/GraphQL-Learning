import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {ApolloProvider,ApolloClient,InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri:'https://graphqlzero.almansi.me/api',
  cache:new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>
);

