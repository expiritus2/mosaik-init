import { ACCESS_TOKEN, ID_TOKEN } from 'settings/constants/localStorage';
import { getItems, setItems, removeItems } from 'helpers/localStorage';

export class Auth {
    static authDataKeys = [ACCESS_TOKEN, ID_TOKEN];

    /**
     * @returns {object} with tokens
     */
    static getAuthData = () => {
        const items = getItems(this.authDataKeys);
        return items;
    }

    /**
     * @returns {boolean}
     */
    static isAuthData = () => {
        const items = getItems(this.authDataKeys);
        return Promise.resolve(!!(items[ACCESS_TOKEN] && items[ID_TOKEN]));
    }

    /**
     * @param  {object} data - Object of key-value to set in LocalStorage
     */
    static setAuthData = (data) => {
        setItems(data);
        return Promise.resolve();
    }

    static clearAuthData = () => {
        removeItems(this.authDataKeys);
        return Promise.resolve();
    }
}
