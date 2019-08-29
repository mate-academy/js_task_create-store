'use strict';

const createStore = require('./createStore');
const ACTION_INCREASE = 'increase';
const ACTION_ADD = 'add';

const stateWithCountReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };

    case ACTION_ADD:
      return {
        ...state,
        count: state.count + action.value,
      };

    default:
      return state;
  }
};

{
  const initialState = { count: 0 };
  const store = createStore(stateWithCountReducer, initialState);

  store.dispatch({ type: 'increase' });
  store.dispatch({ type: 'increase' });
  store.dispatch({ type: 'increase' });

  test('store should return count equal to 3', () => {
    expect(initialState).toMatchObject({ count: 0 });
    expect(store.getState()).toMatchObject({ count: 3 });
  });
}

{
  const initialState = { count: 100, x: 1, y: 2 };
  const store = createStore(stateWithCountReducer, initialState);

  store.dispatch({ type: 'add', value: 5 });

  test('store should return count equal to 105', () => {
    expect(initialState).toMatchObject({ count: 100, x: 1, y: 2 });
    expect(store.getState()).toMatchObject({ count: 105, x: 1, y: 2 });
  });
}
