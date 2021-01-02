import { jsonPlaceholderServer } from 'settings/web-services/api';
import { server } from 'settings/web-services/graphql';
import { getPromiseAllSettledProp, getPromiseAllSettledReason } from 'store/helpers';
import { GET_PINS_QUERY } from 'queries';

export function getTestData(cfg) {
    const postsReq = getPosts(cfg);
    const commentsReq = getComments(cfg);

    return new Promise((resolve, reject) => {
        Promise
            .allSettled([postsReq, commentsReq])
            .then(([posts, comments]) => {
                const data = {
                    posts: getPromiseAllSettledProp(posts), comments: getPromiseAllSettledProp(comments),
                };
                const meta = {
                    posts: getPromiseAllSettledReason(posts), comments: getPromiseAllSettledReason(comments),
                };

                resolve({ data, meta });
            })
            .catch((err) => reject(err));
    });
}

export function getPosts(cfg) {
    return jsonPlaceholderServer.get('/posts', cfg);
}

export function getComments(cfg) {
    return jsonPlaceholderServer.get('/comments', cfg);
}

export function getPins(cfg) {
    return new Promise((resolve, reject) => {
        server.query({ query: GET_PINS_QUERY, variables: cfg })
            .then((resp) => resolve({ data: resp?.data?.getPins, meta: cfg }))
            .catch(reject);
    });
}
