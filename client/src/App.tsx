import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import TodoList from './components/TodoList';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  cache,
  link
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <TodoList />
    </ApolloProvider>
  );
}

export default App;
