import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { LocalStorage } from 'services';

const httpLink = new HttpLink({
    uri: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => ({
    headers: {
        ...headers,
        authorization: LocalStorage.getToken(),
    },
}));

export const graphQlServer = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
