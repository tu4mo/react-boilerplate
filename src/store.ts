import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './ducks'

const composeEnhancers =
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'test' ||
  // @ts-expect-error
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
