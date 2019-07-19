import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import React from 'react';
import Header from './Header'
import MainSection from './MainSection'

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjyae8t3u1tej0159p6f6vcx7' // Will work, but you should create your own
  // uri: '__SIMPLE_API_URI__'
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Header />
      <MainSection />
    </div>
  </ApolloProvider>
);

export default App

