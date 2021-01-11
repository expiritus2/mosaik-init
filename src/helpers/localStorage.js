import { reduce, forEach } from 'lodash-es';

/**
 * Get a bunch of LocalStorage items
 * @param {array} items - An array of LocalStorage keys
 * @returns {object}
 */
export function getItems(items) {
    return reduce(items, (acc, val) => {
        acc[val] = localStorage.getItem(val);
        return acc;
    }, {});
}

/**
 * Will set a bunch of items in a LocalStorage at a time.
 * @param {object} items - Object of key-value to set in LocalStorage
 */
export function setItems(items) {
    return forEach(items, (value, key) => value && localStorage.setItem(key, value));
}

/**
 * Remove a bunch of LocalStorage items
 * @param {array} items - An array of LocalStorage keys
 */
export function removeItems(items) {
    return forEach(items, (val) => localStorage.removeItem(val));
}
