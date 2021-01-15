import { mockableIoServer } from 'settings/web-services/api';

export function getUserData(cfg) {
    const userData = getUser(cfg);

    return new Promise((resolve, reject) => {
        userData.then(({ data, status }) => {
            resolve({ data, meta: { status } });
        })
            .catch((err) => reject(err));
    });
}

export function getUser(cfg) {
    return mockableIoServer.get('/get-user', cfg);
}
