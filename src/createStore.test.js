'use strict';

const createStore = require('./createStore');
const initialState = { count: 0 };

describe('getState method', () => {
  const reducer = () => {};
  const store = createStore(reducer, initialState);

  test('Store should return an object with the current state', () => {
    expect(store.getState()).toEqual({ count: 0 });
  });
});

describe('reducer', () => {
  const reducer = jest.fn(() => ({ count: 1 }));
  const store = createStore(reducer, initialState);

  store.dispatch({ type: 'increase' });
  store.dispatch({ type: 'decrease' });

  test('Reducer should be called in every dispatch', () => {
    expect(reducer.mock.calls.length).toBe(2);
  });

  test('Reducer should take state and action for the first call', () => {
    expect(reducer).toBeCalledWith({ count: 0 }, { type: 'increase' });
  });

  test('Reducer should take updated state for the second call', () => {
    expect(reducer).lastCalledWith({ count: 1 }, { type: 'decrease' });
  });
});

describe('callbacks', () => {
  const reducer = () => {};
  const callback1 = jest.fn();
  const callback2 = jest.fn();
  const store = createStore(reducer, initialState);

  store.subscribe(callback1);
  store.subscribe(callback2);
  store.dispatch({ type: 'increase' });
  store.dispatch({ type: 'decrease' });

  test('Each callback should be called after each dispatch', () => {
    expect(callback1.mock.calls.length).toBe(2);
    expect(callback2.mock.calls.length).toBe(2);
  });
});
