import axios from 'axios';

export const jsonPlaceholderServer = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '' : 'https://jsonplaceholder.typicode.com',
});

// TODO: temp
export const mockableIoServer = axios.create({
    baseURL: 'http://demo8539896.mockable.io/',
});
