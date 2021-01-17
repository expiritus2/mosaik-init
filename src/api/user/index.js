import { apiServer } from 'settings/web-services/api';
import { LocalStorage } from 'services';

export function getCurrentUser() {
    return apiServer.get('/get-user');
}

export async function login(cfg) {
    try {
        const response = await apiServer.post('/login', cfg);
        // const token = response.headers.Authorization;
        const { token, ...data } = response.data;

        LocalStorage.setToken(token);

        response.data = data;

        return Promise.resolve(response);
    } catch (err) {
        return Promise.reject(err);
    }
}
