import { ACCESS_TOKEN } from 'settings/constants/localStorage';

export class LocalStorage {
    static getToken() {
        return localStorage.getItem(ACCESS_TOKEN);
    }

    static setToken(token) {
        localStorage.setItem(ACCESS_TOKEN, token);
    }

    static removeToken() {
        localStorage.removeItem(ACCESS_TOKEN);
    }
}
