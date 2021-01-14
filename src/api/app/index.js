// import { apiServer } from 'settings/web-services/api';
// import { graphQlServer } from 'settings/web-services/graphql';
// import { GET_PINS_QUERY } from 'queries';

// export function getPins(cfg) {
//     return new Promise((resolve, reject) => {
//         graphQlServer.query({ query: GET_PINS_QUERY, variables: cfg })
//             .then((resp) => resolve({ data: resp?.data?.getPins, meta: cfg }))
//             .catch(reject);
//     });
// }
