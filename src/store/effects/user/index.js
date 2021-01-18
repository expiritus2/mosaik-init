import Api from 'store/effects/core/api';
import { getUserData, login } from 'api/user';
import { requestGetUserDataAction } from 'store/actions/user';
import { appLoginAction } from 'store/actions/app';
import { LocalStorage } from 'services';

export const userGetDataEffect = (cfg, options, cb) => {
    const sendRequest = Api.execBase({ action: requestGetUserDataAction, method: getUserData });

    return sendRequest(cfg, options, cb);
};

export const loginEffect = (cfg, options, cb) => {
    const sendRequest = Api.execBase({ action: appLoginAction, method: login });

    return sendRequest(cfg, options, (err, response) => {
        const token = response.headers.Authorization;
        LocalStorage.setToken(token);
        cb(err, response);
    });
};
