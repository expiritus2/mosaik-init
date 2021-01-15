import Api from 'store/effects/core/api';
import { getUserData } from 'api/user';
import { requestGetUserDataAction } from 'store/actions/user';

export const userGetDataEffect = Api.execBase({ action: requestGetUserDataAction, method: getUserData });
