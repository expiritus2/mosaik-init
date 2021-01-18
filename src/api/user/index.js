import { apiServer } from 'settings/web-services/api';

export function getUserData(cfg) {
    return apiServer.get('/get-user', cfg);
}

export function login(cfg) {
    return apiServer.post('/login', cfg);
}
