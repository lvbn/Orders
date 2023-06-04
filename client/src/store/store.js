import { createStore, combineReducers } from 'redux'

const initialState = []

const ADD_ORDER = 'ADD_ORDER';
const ADD_ORDERS = 'ADD_ORDERS';
const UPDATE_STATUS = 'UPDATE_STATUS';

const orders = (state = initialState, action) => {

  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.payload];

    case ADD_ORDERS:
      return [...action.payload];

    case UPDATE_STATUS:
      const [keys, values] = Object.entries(action.payload);
      console.log('ACTION: ', action, 'KEYS: ', keys, 'VALUES: ', values)
      return state.map(order => {
        if (order.id === action.payload.id) {
          // o[values[0]] = values[1]
          order.payment = action.payload.payment
          return order;
        } else {
          return order;
        }
      });

    default:
      return state
  }
}

const reducers = combineReducers({
  orders
});

const store = createStore(reducers)

export default store;