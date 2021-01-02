import axios from 'axios';

export const jsonPlaceholderServer = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '' : 'https://jsonplaceholder.typicode.com',
});
