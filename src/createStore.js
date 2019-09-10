'use strict';

/**
 * Implement `createStore` function:
 *
 * Function takes 2 arguments: `recuder` and `initialState` and returns
 * an object with 3 methods:
 *
 * 1. `getState` returns current state
 * 2. `dispatch` accepts an `action` object. It runs the `reducer` passing
 * current `state` and the `action`. New state returned by the `reducer`
 * is saved to be returned by `getState`.
 * 3. `subscribe` accepts a callback. All the added callbacks are run without
 * arguments each time after the `dispatch` updates the `state`.
 *
 * Example:
 * `createStore(numberReducer, 0)` === `{...}`
 *
 * @param {function} reducer
 * @param {number} initialState
 *
 * @returns {object}
 */
const createStore = () => {
  // write code here (remove this text)
};

module.exports = createStore;
