import axios from 'axios';

const getDevelopmentApiLink = () => (process.env.REACT_APP_MOCKABLE_IO ? 'https://demo6107551.mockable.io/api' : '');
const getProductionApiLink = () => '';

export const apiServer = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? getProductionApiLink() : getDevelopmentApiLink(),
});
