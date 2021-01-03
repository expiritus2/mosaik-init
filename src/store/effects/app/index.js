import { Logger } from 'helpers';
import Api from 'store/effects/core/api';
import { getTestData, getPins } from 'api/app';
import { PIN_UPDATE_SUBSCRIPTION } from 'queries';
import { server } from 'settings/web-services/graphql';
import { getTestAction, getTestPinsAction } from 'store/actions/app';

let chatSubscription = null;

export const chatEffect = {
    subscribe: (/* cfg */) => (/* dispatch */) => {
        chatSubscription = server
            .subscribe({ query: PIN_UPDATE_SUBSCRIPTION })
            .subscribe({
                next({ data }) { Logger.log('this', data); },
                error(err) { Logger.error('err', err); },
            });
    },
    unsubscribe: () => () => chatSubscription?.unsubscribe(),
};

export const loadTestEffect = Api.execBase(getTestAction, getTestData);
export const loadPinsEffect = Api.execBase(getTestPinsAction, getPins);
