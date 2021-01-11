import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { ACCESS_TOKEN } from 'settings/constants/localStorage';
import { Auth } from 'services';

const httpLink = new HttpLink({
    uri: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
    const tokens = Auth.getAuthData();

    return {
        headers: {
            ...headers,
            authorization: tokens[ACCESS_TOKEN] ? `Bearer ${tokens[ACCESS_TOKEN]}` : '',
        },
    };
});

export const server = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
