import axios from 'axios';
import { LocalStorage } from 'services';

export const apiServer = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '' : 'https://demo6107551.mockable.io/api',
    headers: {
        Authorization: LocalStorage.getToken(),
    },
});
