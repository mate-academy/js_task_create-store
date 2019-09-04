'use strict';

const createStore = require('./createStore');

{
  // functions
  const reducer = jest.fn(() => ({ count: 1 }));
  const callback = jest.fn();
  const callback2 = jest.fn();

  // store
  const initialState = { count: 0 };
  const store = createStore(reducer, initialState);

  store.subscribe(callback);
  store.subscribe(callback2);
  store.dispatch({ type: 'increase' });
  store.dispatch({ type: 'decrease' });

  describe('getState method', () => {
    test('Store should return an object with the current state', () => {
      expect(store.getState()).toEqual({ count: 1 });
    });
  });

  describe('Dispatch & subscribe methods', () => {
    test('Reducer should be n in every dispatch', () => {
      expect(reducer.mock.calls.length).toBe(2);
    });

    test('Reducer should take state and action for the first call', () => {
      expect(reducer).toBeCalledWith({ count: 0 }, { type: 'increase' });
    });

    test('Reducer should take updated state for the second call', () => {
      expect(reducer).lastCalledWith({ count: 1 }, { type: 'decrease' });
    });

    test('Each callback should be called after each dispatch', () => {
      expect(callback.mock.calls.length).toBe(2);
    });

    test('Dispatch should call each callback', () => {
      expect(callback2.mock.calls.length).toBe(2);
    });
  });
}
