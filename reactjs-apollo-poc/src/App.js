import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
