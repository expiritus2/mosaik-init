import { PENDING, READY, ERROR } from 'settings/constants/api-state';

export default class Api {
    static execBase(action, method) {
        return (cfg = {}, options = {}, cb) => (
            Api.execFunc({ cfg, options, action, method, cb })
        );
    }

    static execResult(action, method) {
        return (cfg = {}, options = {}, cb) => (
            Api.execFunc({ cfg, options, action, method, pending: false, cb })
        );
    }

    static execFunc({ cfg, options, action, method, pending = true, cb }) {
        return async (dispatch) => {
            if (pending) {
                Api.setPending({ dispatch, action });
            }

            try {
                const response = await method(cfg, options);
                Api.setData({ dispatch, action, cfg: { ...cfg, ...response.meta }, response });

                if (typeof cb === 'function') {
                    cb(null, response);
                }
            } catch (err) {
                const config = { ...cfg, status: err.response.status, message: err.message };

                Api.setError({ dispatch, action, cfg: config, response: err });

                if (typeof cb === 'function') {
                    cb(err);
                }
            }
        };
    }

    static setPending({ dispatch, action }) {
        dispatch(action({ state: PENDING }));
    }

    static setData({ dispatch, action, cfg, response }) {
        dispatch(action({ state: READY, data: response.data, meta: cfg }));
    }

    static setError({ dispatch, action, cfg }) {
        dispatch(action({ state: ERROR, data: undefined, meta: cfg }));
    }
}
