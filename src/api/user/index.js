import { apiServer } from 'settings/web-services/api';

export function getCurrentUser() {
    return apiServer.post('/get-user');
}
