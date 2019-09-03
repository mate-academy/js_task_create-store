'use strict';

const createStore = require('./createStore');

{
  // functions
  const reducer = jest.fn(() => ({ count: 1 }));
  const callback = jest.fn();

  // store
  const initialState = { count: 0 };
  const store = createStore(reducer, initialState);

  store.subscribe(callback);
  store.dispatch({ type: 'increase' });
  store.dispatch({ type: 'decrease' });

  test('Reducer should be called twice', () => {
    expect(reducer.mock.calls.length).toBe(2);
  });

  test('Store should return an object with state', () => {
    expect(store.getState()).toMatchObject({ count: 1 });
  });

  test('Reducer expects two arguments', () => {
    expect(reducer).toBeCalledWith({ count: 0 }, { type: 'increase' });
    expect(reducer).toBeCalledWith({ count: 1 }, { type: 'decrease' });
  });

  test('Callback should be called after each dispatch', () => {
    expect(callback.mock.calls.length).toBe(2);
  });
}
