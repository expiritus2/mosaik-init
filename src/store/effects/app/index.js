import Api from 'store/effects/core/api';
import { getTestData, getPins } from 'api/app';
import { getTestAction, getTestPinsAction } from 'store/actions/app';
import { server } from 'settings/web-services/graphql';
import { Logger } from 'helpers';

import { PIN_UPDATE_SUBSCRIPTION } from 'queries';

export const loadTestEffect = Api.execBase(getTestAction, getTestData);
export const loadPinsEffect = Api.execBase(getTestPinsAction, getPins);

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
