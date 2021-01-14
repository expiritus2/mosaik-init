// import { apiServer } from 'settings/web-services/api';

export function getCurrentUser() {
    // return apiServer.post('/get-user');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: { roles: ['SuperUser'] } });
        }, 1000);
    });
}
