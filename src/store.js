import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { itemsReducer } from './reducers/itemsReducer'
import { filterReducer } from './reducers/filterReducer'
import { cartReducer } from './reducers/cartReducer'
import { buyReducer } from './reducers/buyReducer'

const reducers = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  cart: cartReducer,
  buy: buyReducer
})

export const store = createStore(reducers, composeWithDevTools())
