import { ACCESS_TOKEN, ID_TOKEN } from 'settings/constants/localStorage';
import { getItems, setItems, removeItems } from 'helpers/localStorage';

const AUTH_DATA_KEYS = [ACCESS_TOKEN, ID_TOKEN];

export const getAuthData = () => {
    const items = getItems(AUTH_DATA_KEYS);
    return items;
};

export const isAuthData = () => {
    const items = getItems(AUTH_DATA_KEYS);
    return Promise.resolve(!!(items[ACCESS_TOKEN] && items[ID_TOKEN]));
};

export const setAuthData = (data) => {
    setItems(data);
    return Promise.resolve();
};

export const clearAuthData = () => {
    removeItems(AUTH_DATA_KEYS);
    return Promise.resolve();
};
