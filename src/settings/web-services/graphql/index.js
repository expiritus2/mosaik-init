import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
    uri: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4000/graphql',
});

export const server = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    // credentials: process.env.NODE_ENV === 'production' ? 'same-origin' : 'include',
});
