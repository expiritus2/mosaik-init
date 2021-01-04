import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const wsLink = new WebSocketLink({
    uri: process.env.NODE_ENV === 'production' ? '' : 'ws://localhost:4000/graphql',
    options: {
        reconnect: true,
    },
});

const httpLink = new HttpLink({
    uri: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4000/graphql',
});

const splitLink = split(({ query }) => {
    const definition = getMainDefinition(query);

    return (
        definition.kind === 'OperationDefinition'
        && definition.operation === 'subscription'
    );
}, wsLink, httpLink);

export const server = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
    // credentials: process.env.NODE_ENV === 'production' ? 'same-origin' : 'include',
});
