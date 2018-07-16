import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import articles from './articles'
import currentCountry from './currentCountry'

// Combining all reducers
export const reducer = combineReducers({
  articles,
  currentCountry
})

// Logging middleware
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))

// Use combined reducers to create store
const store = createStore(reducer, middleware)

// Export all thunks centrally to avoid having to grab individual files across components
export default store
export * from './articles'
export * from './currentCountry'
