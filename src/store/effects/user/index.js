import Api from 'store/effects/core/api';
import { getUserData, login } from 'api/user';
import { requestGetUserDataAction } from 'store/actions/user';
import { appLoginAction } from 'store/actions/app';

export const userGetDataEffect = Api.execBase({ action: requestGetUserDataAction, method: getUserData });
export const loginEffect = Api.execBase({ action: appLoginAction, method: login });
