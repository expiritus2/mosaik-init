import { ApolloClient, HttpLink, InMemoryCache, setContext } from '@apollo/client';

import { ACCESS_TOKEN } from 'settings/constants/localStorage';
import { getAuthData } from 'services/auth';

const httpLink = new HttpLink({
    uri: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const tokens = getAuthData();
    // return the headers to the context so httpLink can read them

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
