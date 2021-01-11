import queryString from 'query-string';

export const getQuery = (location, options) => (
    queryString.parse(location.search, { parseNumbers: true, parseBooleans: true, ...options })
);

export const setQuery = (location, params, options = {}) => {
    const search = queryString.parse(location.search);
    const query = queryString.stringify({ ...search, ...params }, { sort: false, ...options });
    return `${location.pathname}?${query}`;
};
