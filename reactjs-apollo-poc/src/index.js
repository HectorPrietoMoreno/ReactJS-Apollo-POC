import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
});

const GET_CHARACTERS_NAME = gql`
{
    characters {
      results {
        name
        id
      }
    }
  }
`;

const CharactersQuery = () => {
    return (<Query query={GET_CHARACTERS_NAME}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error!</p>;
            return data.characters.results.map(character => <p key={character.id}>{character.name}</p>);
        }}
    </Query>
    );
};

const App = () => {
    return (
        <div className="App">
            <CharactersQuery />
        </div>
    );
}

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));