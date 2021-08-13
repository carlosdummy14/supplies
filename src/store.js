import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { itemsReducer } from './reducers/itemsReducer'
import { filterReducer } from './reducers/filterReducer'
import { carReducer } from './reducers/carReducer'
import { buyReducer } from './reducers/buyReducer'

const reducers = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  car: carReducer,
  buy: buyReducer
})

export const store = createStore(reducers, composeWithDevTools())
