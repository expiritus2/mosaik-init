import { mockableIoServer } from 'settings/web-services/api';
import { LocalStorage } from '../../services';

export function getUserData(cfg) {
    return new Promise((resolve, reject) => {
        mockableIoServer.get('/get-user', cfg)
            .then(({ data, status }) => resolve({ data, meta: { status } }))
            .catch((err) => reject(err));
    });
}

export async function login(cfg) {
    try {
        const response = await mockableIoServer.post('/login', cfg);
        const token = response.headers.Authorization;

        LocalStorage.setToken(token);

        return Promise.resolve(response);
    } catch (err) {
        return Promise.reject(err);
    }
}
